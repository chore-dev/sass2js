import massageSass2JsJson from './parser/sass2jsJson';
import massageSassExportRoot from './parser/sassExportRoot';
import { isSassRootExport, isString, isStringifiedSass2JsJson } from './utilities/is';
import { unquote } from './utilities/string';
import { transpile } from './utilities/values';

function parser<Output = unknown, Input = unknown>(input: Input, preserveString = false) {
  if (isSassRootExport(input)) {
    return massageSassExportRoot<Output>(input, preserveString);
  } else if (isStringifiedSass2JsJson(input)) {
    return massageSass2JsJson<Output>(input, preserveString);
  } else if (isString(input)) {
    const output = unquote(input);
    return preserveString ? output : (transpile(output) as Output);
  } else {
    return input as unknown as Output;
  }
}

export default parser;
