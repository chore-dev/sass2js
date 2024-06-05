import parser from '@chore-dev/sass2js/lib/js';
import { useEffect } from 'react';

import variables from './export.module.scss';

const c = console;
const map = variables.map;
const decoded = decodeURIComponent(map);
const unquoted = decoded.replace(/^'|'$/g, '');
const parsed = JSON.parse(unquoted);

function App() {
  useEffect(() => c.log(parsed, parser), []);

  return (
    <div>
      <textarea
        defaultValue={JSON.stringify(parsed, null, 2)}
        disabled
        style={{
          border: 'none',
          height: '100vh',
          padding: '10px',
          resize: 'none',
          width: '100vw'
        }}
      />
    </div>
  );
}

export default App;
