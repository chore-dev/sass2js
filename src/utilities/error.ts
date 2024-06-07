import chalk from 'chalk';

import { CONFIG_FILE_NAME, NAMESPACE } from './constants';

const MESSAGES = {
  configNotFound: [
    'Config not found',
    `Please create \`${CONFIG_FILE_NAME}\` file in the root directory, or`,
    'specify the path to the config file using `-c` or `--config` flag.'
  ],
  exportNotFound: 'No `:export` block found in `{{file}}`.',
  inputNotFound: '`input` not found at config index {{index}}.',
  outputDirNotFound: '`outputDir` not found at config index {{index}}.'
} as const;

function error(key: keyof typeof MESSAGES, variables?: Record<string, unknown>) {
  const messages = MESSAGES[key];

  (Array.isArray(messages) ? messages : [messages]).forEach(line => {
    console.error(chalk.bold.red(`[${NAMESPACE}] ${replaceVariables(line, variables || {})}`));
  });
}

function replaceVariables(message: string | undefined, variables: Record<string, unknown>) {
  return Object.entries(variables).reduce((acc, [key, value]) => {
    return `${acc}`.replace(new RegExp(`{{${key}}}`, 'g'), value as string);
  }, message);
}

export default error;
