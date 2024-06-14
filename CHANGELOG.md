# Changelog

## [1.0.7](https://github.com/chore-dev/sass2ts/compare/v1.0.6...v1.0.7) (2024-06-14)

### Bug Fixes

- fixed duplicated output file name issue
  ([57e3a59](https://github.com/chore-dev/sass2ts/commit/57e3a59f1194aa97ad3ddad99d9bd15770453d54))
- fixed missing types issue
  ([e6d9076](https://github.com/chore-dev/sass2ts/commit/e6d90766365a5c45ea07ad304799e8050ecf19ba))
- fixed relative path missing prefix issue
  ([88df1ba](https://github.com/chore-dev/sass2ts/commit/88df1badd60698c004d58f8cc9c5093e2e4107c4))

## [1.0.6](https://github.com/chore-dev/sass2ts/compare/v1.0.5...v1.0.6) (2024-06-13)

### Bug Fixes

- fixed parser output type error
  ([bda43f9](https://github.com/chore-dev/sass2ts/commit/bda43f924eb1990a08359930e56a583f69e09aa6))

## [1.0.5](https://github.com/chore-dev/sass2ts/compare/v1.0.4...v1.0.5) (2024-06-13)

### Restructured

- implementing own importer
  ([e53804e](https://github.com/chore-dev/sass2ts/commit/e53804efa079ed4c6fc11400938ba75cf89863f7))

## [1.0.4](https://github.com/chore-dev/sass2ts/compare/v1.0.3...v1.0.4) (2024-06-13)

### Restructured

- replaced sass.NodePackageImport with FileImporter
  ([78f691f](https://github.com/chore-dev/sass2ts/commit/78f691fec7aa125039cdc3f2e93cd2a7ae0af1ea))

## [1.0.3](https://github.com/chore-dev/sass2ts/compare/v1.0.2...v1.0.3) (2024-06-13)

### Bug Fixes

- fixed missing node modules importer when compile sass
  ([2e34b38](https://github.com/chore-dev/sass2ts/commit/2e34b38f441540d4c3c0ae5e789677e2caaea10c))

## [1.0.2](https://github.com/chore-dev/sass2ts/compare/v1.0.1...v1.0.2) (2024-06-13)

### Bug Fixes

- fixed missing file when publish
  ([1b2b305](https://github.com/chore-dev/sass2ts/commit/1b2b305f20c5f35f892c72d7c5d0f53eab90c2da))

## [1.0.1](https://github.com/chore-dev/sass2ts/compare/v1.0.0...v1.0.1) (2024-06-13)

### Bug Fixes

- fixed incorrect export
  ([98b2afe](https://github.com/chore-dev/sass2ts/commit/98b2afe33cbeb403629e52514311825dba990da7))

## 1.0.0 (2024-06-13)

### Features

- added implementGetter option
  ([dc4660f](https://github.com/chore-dev/sass2ts/commit/dc4660ff43b84fd80d997bb743ee19d6d4e5d37f))
- implement js parser and type generator
  ([955b964](https://github.com/chore-dev/sass2ts/commit/955b96477a25e48f835668cd54c114e675a58265))
- implement sass parser
  ([8e3b26f](https://github.com/chore-dev/sass2ts/commit/8e3b26fcb1f8d102ef1481e399dbff4b78a21242))

### Restructured

- renamed scss parser to stringifier
  ([95d870b](https://github.com/chore-dev/sass2ts/commit/95d870bde6d87e84617a7c283490085e16323b12))
