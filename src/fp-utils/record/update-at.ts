import { has } from "./has";
import { left, right } from "../either";

import type { ReadonlyRecord } from "../../types";

const updateAt =
  <A>(k: string, v: A) =>
  (r: ReadonlyRecord<string, A>) => {
    if (!has(r, k)) {
      return left(`${k} not found.`);
    }

    let R: Record<string, A> = Object.assign({}, r);

    R[k] = v;

    return right(R);
  };

export { updateAt };
