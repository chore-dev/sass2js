# Sass2Ts

Bridge Sass & JS! Easily exporting Sass variables and parser them to typed typescript variables for
better DX.

## Table of content

- [Installation](#installation)
- [Usage](#usage)
  - [Export values in Sass](#export-values-in-sass)
  - [Generate types](#generate-types)
  - [Use values in TypeScript](#use-values-in-typescript)
- [sass2ts.config.js](#sass2tsconfigjs)
- [Options](#options)

## Installation

Install the package as a dependency:

```shell
# NPM
$ npm install -D @chore-dev/sass2ts

# PNPM
$ pnpm add -D @chore-dev/sass2ts

# Yarn
$ yarn add -D @chore-dev/sass2ts
```

## Usage

### Export values in Sass

According to [Sass Doc](https://sass-lang.com/documentation/values/), there are total 8 data types
in Sass:

No need to stringify before exporting:

- Numbers
- Strings
- Colors
- boolean

Need to stringify before exporting:

- List of values
- null
- Maps
- Function references

Notice that error will be thrown if you try to export a data type that need to be stringify

Below is an example of how to export values in Sass:

```Scss
// variables.module.scss

@use 'sass:meta';
@use '@chore-dev/sass2ts/stringifier' as sass2ts;

@function function-example() {
  @return 'this is a example function';
}

:export {
  number-example                  : 1;
  number-quoted-example           : '1';
  number-with-unit-example        : 1px;
  number-with-unit-quoted-example : '1px';
  string-example                  : i-go-to-school-by-bus;
  string-quoted-example           : 'I go to school by bus';
  color-hex-example               : #000000;
  color-hex-quoted-example        : '#000000';
  color-hsl-example               : hsl(0, 0%, 0%);
  color-hsl-quoted-example        : 'hsl(0, 0%, 0%)';
  color-rgb-example               : rgb(0, 0, 0);
  color-rgb-quoted-example        : 'rgb(0, 0, 0)';
  boolean-true-example            : true;
  boolean-true-quoted-example     : 'true';
  boolean-false-example           : false;
  boolean-false-quoted-example    : 'false';
  list-example                    : sass2ts.stringifier((1, i-go-to-school-by-bus, #000000, true, (1, 2, 3, 4, 5), null, (foo: bar), meta.get-function(function-example)));
  null-example                    : sass2ts.stringifier(null);
  map-example                     : sass2ts.stringifier((
    numebr: 1,
    string: i-go-to-school-by-bus,
    color: #000000,
    boolean: true,
    list: (1, 2, 3, 4, 5),
    null: null,
    map: (foo: bar),
    function-example : meta.get-function(function-example)
  ));
  function-example                : sass2ts.stringifier(meta.get-function(function-example));
}
```

### Generate types

1. Add the following script to your `package.json` file

> You may skip this step if you are using PNPM or Yarn

```json
{
  ...
  "scripts": {
    // ...existing scripts
    "sass2ts": "sass2ts"
  },
  ...
}
```

2. Create a config file at the project root directory named `sass2ts.config.js`

> NOTE: Read the [sass2ts.config.js](#sass2tsconfigjs) section for more information

```javascript
/** @type {import("@chore-dev/sass2ts/parser/types").ConfigOptions} */

const config = {
  implementGetter: true,
  input: './path/to/variables.module.scss',
  output: 'fooBar', // No extension needed
  outputDir: './path/of/output/dir',
  preserveString: false,
  rootName: 'FooBar'
};
```

- If "type": "module" in package.json

```javascript
export default config;
```

- If no "type": "module" in package.json

```javascript
module.exports = config;
```

3. Run the following command to start the Sass2Ts:

> NOTE: Read the [Options](#options) section for more information

```shell
# NPM
$ npm run sass2ts [<options>]

# PNPM
$ pnpm sass2ts [<options>]
or # If you have added the script to your `package.json` file
$ pnpm run sass2ts [<options>]

# Yarn
$ yarn sass2ts [<options>]
or # If you have added the script to your `package.json` file
$ yarn run sass2ts [<options>]
```

### Use values in TypeScript

```typescript
// somewhere.ts

import { getFooBar } from './path/of/output/dir/fooBar';

const fooBar = getFooBar();

// Do something with fooBar...
```

## sass2ts.config.js

The following are options that can be used in the `sass2ts.config.js` file:

| Option            | Type      | Optional |        Default         | Description                                                                       |
| ----------------- | --------- | :------: | :--------------------: | --------------------------------------------------------------------------------- |
| `implementGetter` | `boolean` |    Y     |          true          | Include a get function in the output file to direct access the exported variables |
| `input`           | `string`  |          |                        | The source sass export file                                                       |
| `output`          | `string`  |    Y     | Same as the input file | The name of the output file without extension                                     |
| `outputDir`       | `string`  |          |                        | The output directory of the output file                                           |
| `preserveString`  | `boolean` |    Y     |         false          | Should Sass2Ts try its best to convert values to the type it should be            |
| `rootName`        | `string`  |    Y     |    `SassVariables`     | The name of the exporting interface                                               |

## Options

The following are options that can be used in the command line:

| Option                  | Alias             | Description                                                                                            | Example                                |
| ----------------------- | ----------------- | ------------------------------------------------------------------------------------------------------ | -------------------------------------- |
| `--config path::string` | `-C path::string` | Use a config file which is not located at the project root directory or not named as sass2ts.config.ts | `--config ./foo/bar/sass2ts.config.js` |
