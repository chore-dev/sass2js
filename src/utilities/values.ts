import { canParseToNumber, isString } from './is';
import { unquote } from './string';

const TRANSPILE_MAP = {
  false: false,
  null: null,
  true: true
};

const isValidKey = (key: string): key is keyof typeof TRANSPILE_MAP => {
  return key in TRANSPILE_MAP;
};

export const transpile = (input: string): unknown => {
  if (isValidKey(input)) return TRANSPILE_MAP[input];
  if (canParseToNumber(input)) return Number(input);
  return input;
};

export const unescape = (input: string): string => (isString(input) ? unquote(input) : input);
