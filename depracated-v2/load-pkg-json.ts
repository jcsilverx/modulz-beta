import * as fs from "fs";

import { findPkgJson } from "./find-pkg-json";

const NOT_OK = -1;

const loadPkgJson = async (rootDir?: string): Promise<any> => {
  let response = await findPkgJson(rootDir);

  if (response === NOT_OK) {
    throw new Error("`package.json` not found");
  }

  let content = JSON.parse(
    await fs.promises.readFile(response, {
      encoding: "utf-8",
    }),
  );

  return content;
};

export { loadPkgJson };
