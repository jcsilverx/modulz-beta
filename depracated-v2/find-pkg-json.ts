import * as fs from "fs";
import * as path from "path";
import * as url from "url";

const PKG = "package.json";
const NOT_OK = -1;

const findPkgJson = async (rootDir?: string): Promise<string | -1> => {
  let currentPath = rootDir ?? url.fileURLToPath(import.meta.url);

  while (path.dirname(currentPath) !== currentPath) {
    let pkgJson = path.join(currentPath, PKG);

    try {
      await fs.promises.access(pkgJson, fs.constants.F_OK);

      return pkgJson;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error: unknown) {
      currentPath = path.dirname(currentPath);
    }
  }

  return NOT_OK;
};

export { findPkgJson };
