import * as fs from "fs";
import * as path from "path";

type Field = {
  import: {
    types: string;
    default: string;
  };
};

type ReadonlyRecord<T> = Readonly<Record<string, T>>;

type Exports = ReadonlyArray<string> | ReadonlyRecord<Field>;

type Write = Field | Record<string, unknown>;

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
  entry?: string;
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

const definePkgJson = async (options: Options) => {
  let { entry, outDir, exports, ...rest } = options;

  let F = await fs.promises.open(entry ?? "package.json", "a+");
  let content = await F.readFile({
    encoding: "utf-8",
  });
};

export { definePkgJson };

export default definePkgJson({
  exports: {
    ".": {
      import: {
        types: "./dist/esm/index.d.ts",
        default: "./dist/esm/index.js",
      },
    },
  },
});

// 1. 'open' file
// 2. if file exists read it.
//    i. set content to variable R
// 3. else, create file
//    i. set content to v
//
