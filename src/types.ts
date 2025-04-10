import type * as url from "url";

type ReadonlyRecord<K extends string, T> = Readonly<Record<K, T>>;

type PlainRecord = Record<string, any>;

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
type Config<T> = T extends Function ? never : T;

type Left<L> = {
  readonly _tag: "Left";
  readonly left: L;
};

type Right<R> = {
  readonly _tag: "Right";
  readonly right: R;
};

type Either<L, R> = Left<L> | Right<R>;

// type OptionsBase = {
//   /**
//    * The name of the package.
//    */
//   name?: string;
//   /**
//    * Version must be parsable by node-semver, which is bundled
//    * with npm as a dependency.
//    */
//   version?: string;
//   /**
//    * If set to true, then npm will refuse to publish it.
//    */
//   private?: boolean | "true" | "false";
//   /**
//    * The url to the project homepage.
//    */
//   homepage?: string;
//   /**
//    * The url to your project's issue tracker and / or the email address
//    * to which issues should be reported. These are helpful for people who
//    * encounter issues with your package.
//    */
//   bugs?: {
//     /**
//      * The url to your project's issue tracker.
//      */
//     url?: string;
//     /**
//      * The email address to which issues should be reported.
//      */
//     email?: string;
//   };
//   /**
//    * Specify the place where your code lives. This is helpful for people who
//    * want to contribute.
//    */
//   repository?: {
//     type?: string;
//     url?: string;
//     directory?: string;
//   };
//   /**
//    * You should specify a license for your package so that people know how they
//    * are permitted to use it, and any restrictions you're placing on it.
//    */
//   license?: string;
//   /**
//    * A person who has been involved in creating or maintaining this package.
//    */
//   author?: string;
//   /**
//    * When set to "module", the type field allows a package to specify all .js files
//    * within are ES modules. If the "type" field is omitted or set to "commonjs", all
//    * .js files are treated as CommonJS.
//    */
//   type?: "module" | "commonjs";
//   /**
//    * The "exports" field is used to restrict external access to non-exported module
//    * files, also enables a module to import itself using "name".
//    */
//   exports?: ReadonlyRecord<
//     string,
//     {
//       /**
//        * Used to specify conditional exports, note that Conditional exports are unsupported
//        * in older environments, so it's recommended to use the fallback array option if support
//        * for those environments is a concern.
//        */
//       import: {
//         /**
//          * The module path that is resolved when this specifier is imported. Set to `null`
//          * to disallow importing this module.
//          */
//         types: null | string;
//         /**
//          * The module path that is resolved when this specifier is imported. Set to `null`
//          * to disallow importing this module.
//          */
//         default: string;
//       };
//     }
//   >;
//   /**
//    * An ECMAScript module ID that is the primary entry point to your program.
//    */
//   module?: string;
//   /**
//    * The 'files' field is an array of files to include in your project. If you name a folder
//    * in the array, then it will also include the files inside that folder.
//    */
//   // files?: ReadonlyArray<string>;
//   /**
//    * The 'scripts' member is an object hash of script commands that are run at various times
//    * in the lifecycle of your package. The key is the lifecycle event, and the value is the
//    * command to run at that point.
//    */
//   scripts?: ReadonlyRecord<string, string>;
//   /**
//    * Dependencies are specified with a simple hash of package name to version range. The version
//    * range is a string which has one or more space-separated descriptors. Dependencies can also be
//    * identified with a tarball or git URL.
//    */
//   dependencies?: ReadonlyRecord<string, string>;
//   /**
//    * Specifies dependencies that are required for the development and testing of the project. These
//    * dependencies are not needed in the production environment.
//    */
//   devDependencies?: ReadonlyRecord<string, string>;
//   /**
//    * Specifies dependencies that are required by the package but are expected to be provided by the
//    * consumer of the package.
//    */
//   peerDependencies?: ReadonlyRecord<string, string>;
//   /**
//    * Defines which package manager is expected to be used when working on the current project. This
//    * field is currently experimental and needs to be opted-in.
//    *
//    * @see https://nodejs.org/api/corepack.html
//    */
//   packageManager?: ReadonlyRecord<string, string>;
//   /**
//    * Engine compatibility.
//    */
//   engines?: ReadonlyRecord<string, string>;
//   /**
//    *
//    */
//   publishConfig?: ReadonlyRecord<string, string>;
// };

type Options = ReadonlyRecord<string, unknown> & {
  /**
   * Specify the root folder within your source files.
   */
  rootDir?: string | url.URL;
  /**
   * Specify an output folder for the emitted file.
   *
   * @default "dist"
   */
  outDir?: string;
  /**
   * Specifies a list of glob patterns that match files to be included.
   */
  include?: ReadonlyArray<string>;
  /**
   * Specifies a list of files to be excluded.
   */
  exclude?: ReadonlyArray<string>;
  /**
   * Omits
   */
  omit?: ReadonlyArray<string>;
};

export type {
  ReadonlyRecord,
  PlainRecord,
  Config,
  Options,
  Left,
  Right,
  Either,
};
