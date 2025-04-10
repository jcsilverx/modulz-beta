import type * as fs from "fs";

type ReadonlyRecord<T> = Readonly<Record<string, T>>;

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
type Config<T> = T extends Function ? never : T;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PlainRecord = Record<string, any>;

type FileSystem = fs.PathLike | fs.promises.FileHandle;

type Field = {
  import: {
    types: string;
    default: string;
  };
};

type Exports = ReadonlyRecord<Field>;

type OptionsBase = {
  /**
   * The name of the package.
   */
  name?: string;
  /**
   * Version must be parsable by node-semver, which is bundled
   * with npm as a dependency.
   */
  version?: string;
};

type Options = OptionsBase & {
  rootDir?: string;
  /**
   * Specify an output folder for the emitted file.
   *
   * @default "dist/esm"
   */
  outDir?: string;
  /**
   * The "exports" field is used to restrict external access to
   * non-exported module files, also enables a module to import
   * itself using "name".
   */
  exports?: Exports;
};

export type {
  FileSystem,
  Field,
  Exports,
  Options,
  OptionsBase,
  Config,
  PlainRecord,
  ReadonlyRecord,
};
