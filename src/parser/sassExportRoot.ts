import { SassRootExport } from '../../types';
import { CHECKSUM } from '../utilities/constants';
import { isString, isStringifiedSass2JsJson } from '../utilities/is';
import { transpile, unescape } from '../utilities/values';

import massageSass2JsJson from './sass2jsJson';

function massageSassExportRoot<Output = unknown>(input: SassRootExport, preserveString: boolean) {
  const output: Record<string, unknown> = {};

  // NOTE: Remove __checksum in the process, remove the identity as a SassRootExport
  for (const key in input) {
    if (key !== CHECKSUM) {
      let value: unknown = input[key];

      if (isString(value)) value = unescape(value);
      if (isString(value) && !preserveString) value = transpile(value);
      if (isStringifiedSass2JsJson(value)) value = massageSass2JsJson(value, preserveString);

      output[key] = value;
    }
  }

  return output as Output;
}

export default massageSassExportRoot;
