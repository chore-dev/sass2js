import commandLineArgs from 'command-line-args';
import json2ts from 'json-to-ts';
import { existsSync, writeFileSync } from 'node:fs';
import { resolve } from 'path';
import * as sass from 'sass';

import { Sass2TsConfig } from '../../types';
import massageSassExportRoot from '../parser/sassExportRoot';
import { CONFIG_FILE_NAME } from '../utilities/constants';
import error from '../utilities/error';

import sassParser from './sass';

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

if (!existsSync(configFile)) {
  error('configNotFound');
  process.exit(1);
}

(async () => {
  const content = (await import(configFile)).default;
  const configs: Extract<Sass2TsConfig, Array<unknown>> = Array.isArray(content)
    ? content
    : [content];

  for (let i = 0; i < configs.length; i++) {
    const options = configs[i];

    if (!options) continue;

    const { input, output, outputDir, preserveString = false, rootName } = options;

    if (!input || !existsSync(PWD(input))) {
      error('inputNotFound', { index: i });
      continue;
    }
    if (!outputDir) {
      error('outputDirNotFound', { index: i });
      continue;
    }

    const compiled = sass.compile(PWD(input), {
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

    let fileName = output;
    if (!fileName) {
      const inputFileName = input.split('/').pop();

      if (inputFileName) {
        fileName = inputFileName.replace(/\.s[ac]ss$/, '.d.ts');
      }
    }
    if (!fileName) fileName = 'sass2ts.d.ts';
    if (!fileName.endsWith('.ts') && !fileName.endsWith('.tsx')) fileName += '.ts';

    const interfaces = json2ts(json, { rootName }).map(block => {
      return block.replace('interface', 'export interface');
    });

    writeFileSync(resolve(PWD(outputDir), fileName), interfaces.join('\n\n'));
  }
})();
