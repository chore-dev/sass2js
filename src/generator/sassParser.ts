import { SassRootExport } from '../types';
import { CHECKSUM } from '../utilities/constants';

function sassParser(content: string) {
  const result: {
    entries: SassRootExport;
    success: boolean;
  } = {
    entries: {
      [CHECKSUM]: `${Date.now()}`
    },
    success: false
  };

  const lines = content.split('\n');

  let started = false;
  lines.forEach(line => {
    const _line = line.trim().replace(/;$/, '');

    if (_line.startsWith(':export')) {
      started = true;
      result.success = true;
      return;
    }
    if (started && _line === '}') {
      started = false;
      return;
    }

    if (!started) return;

    const colon = _line.indexOf(':');
    const key = _line.slice(0, colon).trim();

    result.entries[key] = _line.slice(colon + 1).trim();
  });

  return result;
}

export default sassParser;
