import * as fs from "fs";

import { find } from "./find";
import { isRight } from "./either";

const readFile = async (filename: string, rootDir: string): Promise<string> => {
  let response = await find(filename, rootDir);

  if (!isRight(response)) {
    throw new Error(response.left);
  }

  let content = await fs.promises.readFile(response.right, {
    encoding: "utf-8",
  });

  return content;
};

export { readFile };
