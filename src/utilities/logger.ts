import chalk, { ChalkInstance } from 'chalk';

import { CONFIG_FILE_NAME, NAMESPACE } from './constants';

const CONSOLE = console;
const ERROR_MESSAGES = {
  configEmpty: 'config object is empty at config index {{index}}.',
  configNotFound: [
    'Config not found',
    `Please create \`${CONFIG_FILE_NAME}\` file in the root directory, or`,
    'specify the path to the config file using `-c` or `--config` flag.'
  ],
  exportNotFound: 'No `:export` block found in `{{file}}`.',
  inputNotFound: '`input` not found at config index {{index}}.',
  inputNotSass: '`input` is not an .sass/.scss file at config index {{index}}.',
  outputDirNotFound: '`outputDir` not found at config index {{index}}.'
} as const;

export function error(key: keyof typeof ERROR_MESSAGES, variables?: Record<string, unknown>) {
  const messages = ERROR_MESSAGES[key];

  logger(chalk.bold.red, [...(Array.isArray(messages) ? messages : [messages])], variables);
}

export function lineBreak() {
  CONSOLE.log('');
}

export function log(messages: string | Array<string>) {
  logger(chalk.bold.green, messages);
}

export function logger(
  chalkInstance: ChalkInstance,
  messages: string | Array<string>,
  variables?: Record<string, unknown>
) {
  (Array.isArray(messages) ? messages : [messages]).forEach(line => {
    CONSOLE.log(chalkInstance(`[${NAMESPACE}] ${replaceVariables(line, variables || {})}`));
  });
}

function replaceVariables(message: string | undefined, variables: Record<string, unknown>) {
  return Object.entries(variables).reduce((acc, [key, value]) => {
    return `${acc}`.replace(new RegExp(`{{${key}}}`, 'g'), value as string);
  }, message);
}
