import * as fs from "fs";
import * as path from "path";
// import * as url from "url";

import {
  copyFiles,
  filter,
  find,
  fromRight,
  isNonEmpty,
  isRight,
  loadPkgJson,
  mergePkgJson,
  // eslint-disable-next-line import-x/consistent-type-specifier-style
  type Options,
} from ".";

const OUT_DIR = "dist";
const PKG = "package.json";

const definePkgJson = async (
  options: Options & Record<string, unknown>,
): Promise<void> => {
  let {
    rootDir = ".",
    outDir = OUT_DIR,
    include = [],
    exclude = [],
    omit = [],
    ...rest
  } = options;

  let C = fromRight(await loadPkgJson(rootDir), (r: Record<string, unknown>) =>
    filter(r, (_, Pk): boolean => !omit.includes(Pk)),
  );

  if (!isRight(C)) {
    throw new Error(C.left);
  }

  let json = mergePkgJson(C.right, rest);

  if (Object.hasOwn(json, "files") && Array.isArray(json.files)) {
    json.files = json.files.filter((f: string) => !exclude.includes(f));
  }

  let out = await find(outDir);

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

  await copyFiles(include, out.right);

  return;
};

export { definePkgJson };
