import { readFile } from "./read-file";

const loadPkgJson = async (rootDir: string): Promise<any> =>
  JSON.parse(await readFile("package.json", rootDir));

export { loadPkgJson };
