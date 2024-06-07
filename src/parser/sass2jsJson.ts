import { SASS2JS_JSON } from '../utilities/constants';
import { isArray, isObject, isString } from '../utilities/is';
import { unquote } from '../utilities/string';
import { transpile } from '../utilities/values';

function sanitizeValue(input: unknown, preserveString: boolean) {
  if (isArray(input) || isObject(input)) return sanitizeSass2JsJson(input, preserveString);
  if (!isString(input) || preserveString) return input;

  let output: unknown = input;
  if (isString(output)) output = transpile(output);

  return output;
}

function sanitizeSass2JsJson<Output = unknown>(input: unknown, preserveString: boolean) {
  if (isArray(input)) {
    const output: unknown[] = [];

    input.forEach(entry => {
      if (entry !== SASS2JS_JSON) output.push(sanitizeValue(entry, preserveString));
    });

    return output as Output;
  } else if (isObject(input)) {
    const output: Record<string, unknown> = {};

    for (const key in input) {
      if (key !== SASS2JS_JSON) output[key] = sanitizeValue(input[key], preserveString);
    }

    return output as Output;
  } else {
    return input as Output;
  }
}

function massageSass2JsJson<Output = unknown>(input: string, preserveString: boolean) {
  const unquoted = unquote(input);
  const decoded = decodeURIComponent(unquoted);

  try {
    return sanitizeSass2JsJson<Output>(JSON.parse(decoded), preserveString);
  } catch {
    return input as Output;
  }
}

export default massageSass2JsJson;
