import * as fs from "fs";
import * as path from "path";
// import * as url from "url";

import {
  copyFiles,
  filter,
  find,
  isNonEmpty,
  isRight,
  loadPkgJson,
  mergePkgJson,
  // eslint-disable-next-line import-x/consistent-type-specifier-style
  type Options,
} from ".";

const OUT_DIR = "dist";
const PKG = "package.json";

const run = async (options: Options): Promise<void> => {
  let {
    rootDir,
    include = [],
    exclude = [],
    outDir = OUT_DIR,
    omit = [],
    ...rest
  } = options;

  let content = filter(
    await loadPkgJson(rootDir),
    (_, Pk): boolean => !omit.includes(Pk),
  );

  // @ts-expect-error  -- silent for now
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  content.files = content.files?.filter((e: string) => !exclude.includes(e));

  let json = mergePkgJson(content, rest);

  let out = await find(outDir, rootDir);

  if (!isRight(out)) {
    throw new Error(out.left);
  }

  if (isNonEmpty(include)) {
    json.files = include;
  }

  await fs.promises.writeFile(
    path.join(out.right, PKG),
    JSON.stringify(json, null, 2),
  );

  await copyFiles(include, out.right, rootDir);

  return;
};

export { run };
