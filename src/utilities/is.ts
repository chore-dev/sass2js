import { SassRootExport } from '../../types';

import { CHECKSUM, SASS2TS_JSON } from './constants';

export const canParseToNumber = (input: string): input is `${number}` => {
  return !input.includes(' ') && !isNaN(Number(input));
};

export const isArray = (input: unknown): input is unknown[] => Array.isArray(input);

export const isObject = (input: unknown): input is Record<string, unknown> => {
  return !!input && typeof input === 'object' && !Array.isArray(input);
};

export const isSassRootExport = (input: unknown): input is SassRootExport => {
  return isObject(input) && CHECKSUM in input;
};

export const isString = (input: unknown): input is string => typeof input === 'string';

export const isStringifiedSass2TsJson = (input: unknown): input is string => {
  return isString(input) && input.includes(SASS2TS_JSON);
};
