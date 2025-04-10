/**
 * @internal
 *
 * @since 1.0.0
 */
type Predicate<T> = (value: T, index: number) => boolean;

/**
 * @internal
 *
 * @since 1.0.0
 */
type Refinement<T, U extends T> = (value: T, index: number) => value is U;

/**
 * @internal
 *
 * @since 1.0.0
 */
const filter = (<A>(predicate: Predicate<A>) =>
  (a: ReadonlyArray<A>): Array<A> => {
    let len = a.length >>> 0;

    if (typeof predicate !== "function") {
      throw new TypeError("Predicate/Refinement must be a callback function");
    }

    let R: Array<A> = [];
    let k = 0;
    let to = 0;

    while (k < len) {
      let E = a[k];

      if (predicate(E, k)) {
        R[to] = E;

        to++;
      }

      k++;
    }

    return R;
  }) as {
  <A, B extends A>(
    refinement: Refinement<A, B>,
  ): (a: ReadonlyArray<A>) => Array<B>;
  <A>(predicate: Predicate<A>): (a: ReadonlyArray<A>) => Array<A>;
};

export { filter };
