import { promises as fs } from "fs";
import * as path from "path";

import * as A from "./fp-utils/array";
import * as E from "./fp-utils/either";
import * as R from "./fp-utils/record";
import * as F from "./fp-utils/function";
import { loadPkgJson } from "./load-pkg-json";
import { mergePkgJson } from "./merge-pkg-json";
import { find } from "./find";
import { copyFiles } from "./copy-files";
import { OUT_DIR, PKG, ROOT_DIR } from "./constants";

import type { Options } from "./types";

const definePkgJson = async (options: Options): Promise<void> => {
  let {
    rootDir = ROOT_DIR,
    outDir = OUT_DIR,
    include = [],
    exclude = [],
    omit = [],
    ...rest
  } = options;

  let content = F.pipe(
    await loadPkgJson(rootDir),
    E.fromRight((r) =>
      F.pipe(
        r,
        R.filter((_, Pk): boolean => !omit.includes(Pk)),
      ),
    ),
  );

  if (!E.isRight(content)) {
    throw new Error(content.left);
  }

  let json = mergePkgJson(content.right, rest);

  if (R.has(json, "files") && Array.isArray(json.files)) {
    json.files = F.pipe(
      json.files,
      A.filter((f): boolean => !exclude.includes(f)),
    );
  }

  let out = await find(outDir);

  if (!E.isRight(out)) {
    throw new Error(out.left);
  }

  if (A.isNonEmpty(include)) json.files = include;

  await fs.writeFile(path.join(out.right, PKG), JSON.stringify(json, null, 2));

  await copyFiles(include, out.right);

  return;
};

export { definePkgJson };
