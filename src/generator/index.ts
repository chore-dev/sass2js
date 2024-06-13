import { pascalCase } from 'change-case';
import commandLineArgs from 'command-line-args';
import json2ts from 'json-to-ts';
import { existsSync, writeFileSync } from 'node:fs';
import { resolve } from 'path';
import * as sass from 'sass';
import { pathToFileURL } from 'url';

import { Sass2TsConfig } from '../../types';
import massageSassExportRoot from '../parser/sassExportRoot';
import { CONFIG_FILE_NAME } from '../utilities/constants';
import { error, lineBreak, log } from '../utilities/logger';
import { createFileName } from '../utilities/string';
import getterGenerator from './getterGenerator';

import sassParser from './sassParser';

const PWD = (path: string = '') => resolve(process.cwd(), path);

const options = commandLineArgs([
  {
    defaultValue: `./${CONFIG_FILE_NAME}`,
    name: 'config',
    alias: 'c',
    type: String
  }
]);
const configFile = PWD(options.config);

lineBreak();
log(`Reading config file from ${configFile}...`);

if (!existsSync(configFile)) {
  error('configNotFound');
  process.exit(1);
}

(async () => {
  const content = (await import(configFile)).default;
  const configs: Extract<Sass2TsConfig, Array<unknown>> = Array.isArray(content)
    ? content
    : [content];

  log(`${configs.length} config(s) found.`);

  for (let i = 0; i < configs.length; i++) {
    lineBreak();
    log(`Processing config at index ${i}...`);

    const options = Object.assign(
      {
        implementGetters: true,
        preserveString: false,
        rootName: 'SassVariables'
      },
      configs[i]
    );
    options.rootName = pascalCase(options.rootName);

    if (!options) {
      error('configEmpty', { index: i });
      continue;
    }

    const { implementGetters, input, outputDir, preserveString, rootName } = options;
    const inputPath = PWD(input);

    if (!input || !existsSync(inputPath)) {
      error('inputNotFound', { index: i });
      continue;
    }
    if (!input.endsWith('.sass') && !input.endsWith('.scss')) {
      error('inputNotSass', { index: i });
      continue;
    }
    if (!outputDir || !existsSync(outputDir)) {
      error('outputDirNotFound', { index: i });
      continue;
    }

    const outputFileName = createFileName({ ...options, rootName });
    const outputPath = resolve(PWD(outputDir), outputFileName);

    log([
      `----- ----- ----- ----- ----- ----- ----- ----- ----- -----`,
      `| Input              : ${inputPath}`,
      `| Output             : ${outputPath}`,
      `| Root interface name: ${rootName}`,
      `| Implement getter?  : ${implementGetters}`,
      `| Preserve string?   : ${preserveString}`,
      `----- ----- ----- ----- ----- ----- ----- ----- ----- -----`
    ]);

    const compiled = sass.compile(inputPath, {
      importers: [
        {
          findFileUrl(url) {
            if (!url.startsWith('~')) return null;
            return new URL(url.substring(1), pathToFileURL('node_modules'));
          }
        }
      ],
      style: 'expanded'
    });

    if (!(compiled && compiled.css)) {
      error('exportNotFound', { file: input });
      continue;
    }

    const { entries, success } = sassParser(compiled.css);

    if (!success) {
      error('exportNotFound', { file: input });
      continue;
    }

    const json = massageSassExportRoot(entries, preserveString);
    const interfaces = json2ts(json, { rootName }).map(block => {
      return block.replace('interface', 'export interface');
    });

    writeFileSync(
      outputPath,
      [
        '/* This file is auto-generated by @chore-dev/sass2ts, do not modify it manually. */\n',
        getterGenerator(options, {
          inputPath,
          outputPath
        }),
        interfaces.join('\n\n')
      ]
        .filter(Boolean)
        .join('\n')
    );

    log('Completed!');
  }

  lineBreak();
  log('All config(s) completed!');
})();
