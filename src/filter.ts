import { getOwnKeys } from "@zphyrx/fp-core";

type KRefinement<K extends string, T, S extends T> = (
  kValue: T,
  Pk: K,
  index: number,
) => kValue is S;

type KPredicate<K extends string, T> = (
  kValue: T,
  Pk: K,
  index: number,
) => boolean;

const filter = (<K extends string, T>(
  r: Readonly<Record<K, T>>,
  kPredicate: KPredicate<K, T>,
): Partial<Record<K, T>> => {
  let ownKeys: Array<K> = getOwnKeys(r);
  let len = ownKeys.length >>> 0;

  if (typeof kPredicate !== "function") {
    throw new TypeError("`KPredicate/Refinement` must be a callback function");
  }

  let R: Partial<Record<K, T>> = {};
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
  <K extends string, T, S extends T>(
    r: Readonly<Record<K, T>>,
    kRefinement: KRefinement<K, T, S>,
  ): Partial<Record<K, S>>;
  <K extends string, T>(
    r: Readonly<Record<K, T>>,
    kPredicate: KPredicate<K, T>,
  ): Partial<Record<K, T>>;
};

export { filter };
