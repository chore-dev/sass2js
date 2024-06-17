export interface ConfigOptions {
  implementGetter?: boolean;
  input: string;
  output?: string;
  outputDir: string;
  preserveString?: boolean;
  rootName?: string;
}

export type Sass2TsConfig = ConfigOptions | Array<ConfigOptions>;
