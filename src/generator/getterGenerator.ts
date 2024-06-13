import { relative } from 'path';

import { ConfigOptions } from '../../types';

function getterGenerator(
  options: ConfigOptions,
  paths: Record<'inputPath' | 'outputPath', string>
) {
  const { implementGetters, rootName } = options;
  const { inputPath, outputPath } = paths;

  const outputDir = outputPath.split('/').slice(0, -1).join('/');

  return implementGetters
    ? [
        // TODO: Fill in scss path
        `import parser from '@chore-dev/sass2ts/parser';`,
        '',
        `import variables from '${relative(outputDir, inputPath)}';`,
        '',
        `export const get${rootName} = () => {`,
        `  return parser<${rootName}>(variables);`,
        '};',
        ''
      ].join('\n')
    : '';
}

export default getterGenerator;
