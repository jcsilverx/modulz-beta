import * as zphyrx from "@zphyrx/modulz-temp-beta";

export default zphyrx.run({
  rootDir: import.meta.url,
  exports: {
    "./array": {
      import: {
        types: "./dist/esm/array/index.d.ts",
        default: "./dist/esm/array/index.ts",
      },
    },
  },
  include: ["LICENSE", "README.md"],
  exclude: ["dist"],
});

// "postbuild": "node --loader ts-node/esm modulz.config.mts",
