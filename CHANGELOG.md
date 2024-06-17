# Changelog

## [1.0.15](https://github.com/chore-dev/sass2ts/compare/v1.0.14...v1.0.15) (2024-06-17)

### Bug Fixes

- fixed incorrect import when generating get fn
  ([d9be574](https://github.com/chore-dev/sass2ts/commit/d9be5740803d96692f804b84e7694363efea0106))

## [1.0.14](https://github.com/chore-dev/sass2ts/compare/v1.0.13...v1.0.14) (2024-06-17)

### Restructured

- updated export strategy
  ([2d182ae](https://github.com/chore-dev/sass2ts/commit/2d182ae6faa6c7e292029f541ed76de8b85310d5))

## [1.0.13](https://github.com/chore-dev/sass2ts/compare/v1.0.12...v1.0.13) (2024-06-17)

### Restructured

- updated output directory from /js to /parser
  ([cba36e9](https://github.com/chore-dev/sass2ts/commit/cba36e9f095c6b7164680a4d49684d3c7ff6d338))

## [1.0.12](https://github.com/chore-dev/sass2ts/compare/v1.0.11...v1.0.12) (2024-06-17)

## [1.0.11](https://github.com/chore-dev/sass2ts/compare/v1.0.10...v1.0.11) (2024-06-17)

### Bug Fixes

- fixed missing preserveString flag in get fn
  ([77c4d2a](https://github.com/chore-dev/sass2ts/commit/77c4d2a8cec845360ac214448a85557ea116cb12))

## [1.0.10](https://github.com/chore-dev/sass2ts/compare/v1.0.9...v1.0.10) (2024-06-17)

### Restructured

- skipped unnecessary checkings
  ([970c721](https://github.com/chore-dev/sass2ts/commit/970c721c7a9baa6f811bb03d57a7dae822bbc9b7))

## [1.0.9](https://github.com/chore-dev/sass2ts/compare/v1.0.8...v1.0.9) (2024-06-17)

### Bug Fixes

- fixed missing external in rollup
  ([f86e96d](https://github.com/chore-dev/sass2ts/commit/f86e96dab3a9271b60b8fdca5c35e43d11ac10b2))

### Restructured

- relocate and renamed global type file
  ([ab3b168](https://github.com/chore-dev/sass2ts/commit/ab3b16819b67aa0b0f7adb219ec964d094f571ce))
- renamed implementGetters with implementGetter
  ([9d71824](https://github.com/chore-dev/sass2ts/commit/9d718243108223f44750548928d0360c3c7ef67e))
- updated cli --config alias to -C
  ([6ee5fe0](https://github.com/chore-dev/sass2ts/commit/6ee5fe0a11d4d2b72f79e75eff3626c93b0efbde))

## [1.0.8](https://github.com/chore-dev/sass2ts/compare/v1.0.7...v1.0.8) (2024-06-14)

### Bug Fixes

- fixed relative path missing prefix issue
  ([b65b058](https://github.com/chore-dev/sass2ts/commit/b65b05872ecc14e23a255f95df2f15fa6a36dd5f))

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
