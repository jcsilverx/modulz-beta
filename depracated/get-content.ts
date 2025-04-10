import * as fs from "fs";
import { jsonParse } from "@zphyrx/fp-core";

import type { FileSystem } from "./types";

const getContent = async (fpath: FileSystem) => {
  const response = await fs.promises.readFile(fpath, "utf-8");
  const data = jsonParse(response);

  if (!response) {
    throw new Error("Something went wrong while reading/parsing the file");
  }

  return data;
};

export { getContent };
