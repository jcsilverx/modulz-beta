import { getOwnKeys } from "@zphyrx/fp-core";

import type { ReadonlyRecord } from "../../types";

/**
 * @internal
 *
 * @since 1.0.0
 */
type KRefinement<K extends string, A, B extends A> = (
  kValue: A,
  Pk: K,
  index: number,
) => kValue is B;

/**
 * @internal
 *
 * @since 1.0.0
 */
type KPredicate<K extends string, A> = (
  kValue: A,
  Pk: K,
  index: number,
) => boolean;

/**
 * @internal
 *
 * @since 1.0.0
 */
const filter = (<K extends string, A>(kPredicate: KPredicate<K, A>) =>
  (r: ReadonlyRecord<K, A>): Partial<Record<K, A>> => {
    let ownKeys: Array<K> = getOwnKeys(r);
    let len = ownKeys.length >>> 0;

    if (typeof kPredicate !== "function") {
      throw new TypeError(
        "`KPredicate/Refinement` must be a callback function",
      );
    }

    let R: Partial<Record<K, A>> = {};
    let k = 0;

    while (k < len) {
      let Pk = ownKeys[k];
      let kValue = r[Pk];

      if (kPredicate(kValue, Pk, k)) {
        R[Pk] = kValue;
      }

      k++;
    }

    return R;
  }) as {
  <K extends string, A, B extends A>(
    kRefinement: KRefinement<K, A, B>,
  ): (r: ReadonlyRecord<K, A>) => Partial<Record<K, B>>;
  <K extends string, A>(
    kPredicate: KPredicate<K, A>,
  ): (r: ReadonlyRecord<K, A>) => Partial<Record<K, A>>;
};

export { filter };
