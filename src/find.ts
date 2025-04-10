import * as fs from "fs";
import * as path from "path";
import * as url from "url";

import { isObject } from "./is-object";
import { left, right } from "./either";

import type { Either } from "./types";

const find = async (
  searchString: string,
  rootDir: string | url.URL = ".",
): Promise<Either<string, string>> => {
  let F =
    isObject(rootDir) || rootDir.startsWith("file://")
      ? url.fileURLToPath(rootDir)
      : rootDir;

  let currentDir = path.dirname(F);

  try {
    let P = path.join(currentDir, searchString);

    await fs.promises.access(P, fs.constants.F_OK);

    return right(P);
  } catch {}

  return left(`'${searchString}': No such file or directory`);
};

export { find };
