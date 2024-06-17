import { isString, isStringifiedSass2TsJson } from '../utilities/is';
import { transpile, unescape } from '../utilities/values';

import massageSass2TsJson from './sass2tsJson';

function massageObject<Output = unknown>(input: Record<string, unknown>, preserveString: boolean) {
  const output: Record<string, unknown> = {};

  for (const key in input) {
    let value: unknown = input[key];

    if (isString(value)) value = unescape(value);
    if (isString(value) && !preserveString) value = transpile(value);
    if (isStringifiedSass2TsJson(value)) value = massageSass2TsJson(value, preserveString);

    output[key] = value;
  }

  return output as Output;
}

export default massageObject;
