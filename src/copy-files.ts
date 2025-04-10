import * as fs from "fs";
import * as path from "path";

import { find } from "./find";
import { isRight } from "./either";

const copyFiles = async (
  src: readonly string[],
  dest: string,
  rootDir: string,
): Promise<void> => {
  if (src.length === 0) return;

  for (let s of src) {
    let F = await find(s, rootDir);

    if (!isRight(F)) {
      throw new Error(F.left);
    }

    await fs.promises.copyFile(F.right, `${dest}/${path.basename(s)}`);
  }

  return;
};

export { copyFiles };
