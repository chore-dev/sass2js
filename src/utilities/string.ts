import { ConfigOptions } from '../../types';

import { NAMESPACE_LOWERCASE } from './constants';

export const createFileName = (options: ConfigOptions) => {
  const { implementGetters, input, output = '' } = options;
  const extension = implementGetters ? '.ts' : '.d.ts';

  // Try to use user-defined output file name
  let fileName = output.replace(/\.(d\.)?ts$/, '');

  // If user-defined output file name is not provided, use input file name by removing .sass or .scss extension
  if (!fileName) {
    const inputFileName = input.split('/').pop();

    if (inputFileName) {
      fileName = inputFileName.replace(/\.s[ac]ss$/, extension);
    }
  }

  // Just in case, if fileName is still empty, use default file name
  if (!fileName) fileName = NAMESPACE_LOWERCASE;

  return `${fileName}${extension}`;
};

export const isQuoted = (input: string) => {
  return (
    (input.startsWith(`'`) && input.endsWith(`'`)) || (input.startsWith(`"`) && input.endsWith(`"`))
  );
};

export const unquote = (input: string): string => {
  if (isQuoted(input)) {
    return unquote(input.slice(1, -1));
  } else {
    return input;
  }
};
