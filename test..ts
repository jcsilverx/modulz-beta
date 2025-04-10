import { combine, jsonParse } from "@zphyrx/fp-core";
import * as fs from "fs";
import * as path from "path";
import { FileSystem } from "./src/types";
import { mergeConfig } from "./src/merge-pkg-json";

type Field = {
  import: {
    types: string;
    default: string;
  };
};

type ReadonlyRecord<T> = Readonly<Record<string, T>>;

type Exports = ReadonlyRecord<Field>;

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

const definePkgJson = async (options: Options): Promise<void> => {
  let { entry, outDir = "dist/esm", ...rest } = options;

  const content = await fs.promises.readFile(
    path.join(__dirname, entry ?? "package.json"),
    "utf-8",
  );
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  let parsed = JSON.parse(content);
  let O = mergeConfig(parsed, rest);
  let R = JSON.stringify(O, null, 2);

  await fs.promises.mkdir(path.dirname(`${outDir}/package.json`), {
    recursive: true,
  });
  await fs.promises.writeFile(`${outDir}/package.json`, R);

  return undefined;
};

export { definePkgJson };

export default definePkgJson({
  entry: "package.json",
  exports: {
    ".": {
      import: {
        types: "./dist/esm/index.d.ts",
        default: "./dist/esm/index.js",
      },
    },
    "./array": {
      import: {
        types: "./dist/esm/array/index.d.ts",
        default: "./dist/esm/array/index.js",
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

// import { mergeConfig } from "./src/merge-config";

// const json = {
//   name: "@zphyrx/modulz",
//   version: "0.0.0",
//   private: true,
//   homepage: "https://zphyrx.com",
//   bugs: { url: "https://github.com/zphyrx/modulz/issues" },
//   repository: { type: "git", url: "git+https://github.com/zphyrx/modulz.git" },
//   license: "MIT",
//   author: "jcsilverx <jcsilverx@gmail.com>",
//   type: "module",
//   module: "./dist/esm/index.js",
//   files: ["dist", "README.md"],
//   scripts: {
//     build: "tsup",
//     dev: "tsup --watch",
//     "check-types": "tsc",
//     lint: "eslint . --max-warnings 0",
//     clean: "rm -rf node_modules dist",
//     format: 'prettier --write "**/*.{ts,md}"',
//     test: "vitest",
//     "test:watch": "vitest --watch",
//     bench: "vitest bench",
//     "bench:watch": "vitest bench --watch",
//     changeset: "changeset",
//     version: "changeset version",
//     release: "changeset publish",
//   },
//   devDependencies: {
//     "@changesets/cli": "^2.28.1",
//     "@typescript-eslint/utils": "^8.29.1",
//     "@zphyrx/eslint-config": "^1.1.5",
//     "@zphyrx/prettier-config": "^1.1.3",
//     "@zphyrx/tsup-config": "^1.1.3",
//     "@zphyrx/typescript-config": "^1.1.0",
//     "@zphyrx/vitest-config": "^1.1.3",
//     eslint: "^9.24.0",
//     jiti: "^2.4.2",
//     prettier: "^3.5.3",
//     tsup: "^8.4.0",
//     typescript: "^5.8.3",
//     vitest: "^3.1.1",
//   },
//   packageManager:
//     "pnpm@10.8.0+sha512.0e82714d1b5b43c74610193cb20734897c1d00de89d0e18420aebc5977fa13d780a9cb05734624e81ebd81cc876cd464794850641c48b9544326b5622ca29971",
//   engines: { node: ">=22.14.0" },
//   publishConfig: { access: "public" },
//   dependencies: {
//     "@zphyrx/fp-core": "^0.0.51",
//     "@zphyrx/merge-config": "^1.1.3",
//   },
// };

// let output = mergeConfig(json, {
//   exports: {
//     ".": {
//       import: {
//         types: "./dist/esm/index.d.ts",
//         default: "./dist/esm/index.js",
//       },
//     },
//     "./types": {
//       import: {
//         types: "./dist/esm/types/index.d.ts",
//         default: "./dist/esm/types/index.js",
//       },
//     },
//     "./array": {
//       import: {
//         types: "./dist/esm/array/index.d.ts",
//         default: "./dist/esm/array/index.js",
//       },
//     },
//     "./either": {
//       import: {
//         types: "./dist/esm/either/index.d.ts",
//         default: "./dist/esm/either/index.js",
//       },
//     },
//     "./function": {
//       import: {
//         types: "./dist/esm/function/index.d.ts",
//         default: "./dist/esm/function/index.js",
//       },
//     },
//     "./map": {
//       import: {
//         types: "./dist/esm/map/index.d.ts",
//         default: "./dist/esm/map/index.js",
//       },
//     },
//     "./option": {
//       import: {
//         types: "./dist/esm/option/index.d.ts",
//         default: "./dist/esm/option/index.js",
//       },
//     },
//     "./ord": {
//       import: {
//         types: "./dist/esm/ord/index.d.ts",
//         default: "./dist/esm/ord/index.js",
//       },
//     },
//     "./record": {
//       import: {
//         types: "./dist/esm/record/index.d.ts",
//         default: "./dist/esm/record/index.js",
//       },
//     },
//     "./set": {
//       import: {
//         types: "./dist/esm/set/index.d.ts",
//         default: "./dist/esm/set/index.js",
//       },
//     },
//   },
// });

// // import * as fs from "fs";
// // import * as path from "path";
// // import { jsonParse } from "@zphyrx/fp-core";

// // import { readFile } from "./src/read-file";

// // import type { Options } from "./src/types";

// // const PKG = "package.json";

// // const modulz = async (options: Options) => {
// //   const { entry, exports, outDir, ...rest } = options;

// //   const fname = entry ?? PKG;
// //   const content = await fs.promises.readFile(
// //     path.join(__dirname, fname),
// //     "utf-8",
// //   );
// //   const parsedContent = jsonParse(content);

// //   console.log(parsedContent);
// // };

// // await modulz({});
