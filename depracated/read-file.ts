import { getContent } from "./get-content";

import type { FileSystem } from "./types";

const readFile = async (fpath: FileSystem) => {
  try {
    const content = await getContent(fpath);

    return content;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { readFile };
