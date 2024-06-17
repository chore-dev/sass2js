import massageObject from './parser/object';
import massageSass2TsJson from './parser/sass2tsJson';
import { isObject, isString, isStringifiedSass2TsJson } from './utilities/is';
import { unquote } from './utilities/string';
import { transpile } from './utilities/values';

function parser<Output = unknown, Input = unknown>(input: Input, preserveString = false) {
  if (isObject(input)) {
    return massageObject<Output>(input, preserveString);
  } else if (isStringifiedSass2TsJson(input)) {
    return massageSass2TsJson<Output>(input, preserveString);
  } else if (isString(input)) {
    const output = unquote(input);
    return (preserveString ? output : transpile(output)) as Output;
  } else {
    return input as unknown as Output;
  }
}

export default parser;
