/**
 * definePkgJson
 * - findPkgJson (always find the closest by default)
 * - loadPkgJson
 * - sortPkgJson
 * - writePkgJson
 */
import * as fs from "fs";
import * as path from "path";

import { mergeConfig } from "./merge-config";

import type { FileSystem, Options } from "./types";

const definePkgJson = async (options: Options): Promise<void> => {
  let { entry = "package.json", outDir, ...json } = options;

  let content = await getContent(path.join(__dirname, entry));

  let R = mergeConfig(content, json);

  console.log(R);

  return undefined;
};

export { definePkgJson };

/**
 * IMPL
 */
const getContent = async (fpath: FileSystem): Promise<any> => {
  let content = await fs.promises.readFile(fpath, {
    encoding: "utf-8",
  });

  if (content.length === 0) {
    throw new Error("`package.json` not found");
  }

  let R = JSON.parse(content);

  return R;
};

export { getContent };
