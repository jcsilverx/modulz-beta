import * as fs from "fs";
import * as path from "path";

import { loadPkgJson } from "./load-pkg-json";
import { mergePkgJson } from "./merge-pkg-json";

import type { Options } from "./types";

const OUT_DIR = "dist";
const PKG = "package.json";

const definePkgJson = async (options: Options): Promise<void> => {
  let { rootDir, outDir = OUT_DIR, ...rest } = options;

  try {
    let content = await loadPkgJson(rootDir);

    let R = mergePkgJson(content, rest);

    await fs.promises.writeFile(
      path.join(outDir, PKG),
      JSON.stringify(R, null, 2),
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error: unknown) {
    console.warn(
      `Unable to write file to "${outDir}". Did you forgot to build the package first?`,
    );
  }

  return;
};

export { definePkgJson };
