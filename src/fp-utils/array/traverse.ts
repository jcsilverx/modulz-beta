/**
 * @internal
 *
 * @since 1.0.0
 */
type CallbackFn<A, B> = (value: A, index: number) => B;

const traverse =
  <A, B>(callbackFn: CallbackFn<A, B>) =>
  (a: ReadonlyArray<A>): Array<B> => {
    let len = a.length >>> 0;

    if (typeof callbackFn !== "function") {
      throw new TypeError("Callback must be a function");
    }

    let R: Array<B> = new Array<B>(len);
    let k = 0;

    while (k < len) {
      let E = a[k];

      R[k] = callbackFn(E, k);

      k++;
    }

    return R;
  };

export { traverse };
