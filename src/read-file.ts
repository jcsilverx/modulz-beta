import * as fs from "fs";

import { find } from "./find";
import { isRight, left, right } from "./either";

import type * as url from "url";
import type { Either } from "./types";

const readFile = async (
  filename: string,
  rootDir: string | url.URL = ".",
): Promise<Either<string, string>> => {
  let R = await find(filename, rootDir);

  if (!isRight(R)) {
    return left(R.left);
  }

  let C = await fs.promises.readFile(R.right, {
    encoding: "utf-8",
  });

  return right(C);
};

export { readFile };
