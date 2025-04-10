import { readFile } from "./read-file";
import { isRight, left, right } from "./either";

import type * as url from "url";
import type { Either } from "./types";

const PKG = "package.json";

const loadPkgJson = async (
  rootDir: string | url.URL = ".",
): Promise<Either<string, any>> => {
  let R = await readFile(PKG, rootDir);

  if (!isRight(R)) {
    return left(R.left);
  }

  let C = JSON.parse(R.right);

  return right(C);
};

export { loadPkgJson };
