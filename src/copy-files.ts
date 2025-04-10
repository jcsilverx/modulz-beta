import * as fs from "fs";
import * as path from "path";

import { find } from "./find";
import { isRight } from "./either";

const copyFiles = async (
  files: ReadonlyArray<string>,
  outDir: string,
): Promise<void> => {
  if (files.length === 0) return;

  for (let file of files) {
    let F = await find(file);

    if (!isRight(F)) {
      console.warn(F.left);

      continue;
    }

    await fs.promises.copyFile(
      F.right,
      path.join(outDir, path.basename(F.right)),
    );
  }

  return;
};

export { copyFiles };
