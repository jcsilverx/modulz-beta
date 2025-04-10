/**
 * @internal
 *
 * @since 1.0.0
 */
type CallbackFn<A, B> = (value: A) => B;

/**
 * @internal
 *
 * @since 1.0.0
 */
const flow = (<A, B, C extends B>(
  ab: (...values: ReadonlyArray<A>) => B,
  ...flows: ReadonlyArray<CallbackFn<B, C>>
): ((...args: ReadonlyArray<A>) => B) => {
  const fn: (...args: ReadonlyArray<A>) => B = (...args): B => {
    let len = flows.length >>> 0;
    let R: B = ab(...args);

    if (len === 0) return R;

    let k = 0;

    while (k < len) {
      let flow = flows[k];

      R = flow(R);

      k++;
    }

    return R;
  };

  return fn;
}) as Flow;

export { flow };

/**
 * @internal
 *
 * @since 1.0.0
 */
type Flow = {
  <A, B>(
    ab: (...values: ReadonlyArray<A>) => B,
  ): (...values: ReadonlyArray<A>) => B;
  <A, B, C>(
    ab: (...values: ReadonlyArray<A>) => B,
    bc: (value: B) => C,
  ): (...values: ReadonlyArray<A>) => C;
  <A, B, C, D>(
    ab: (...values: ReadonlyArray<A>) => B,
    bc: (value: B) => C,
    cd: (value: C) => D,
  ): (...values: ReadonlyArray<A>) => D;
  <A, B, C, D, E>(
    ab: (...values: ReadonlyArray<A>) => B,
    bc: (value: B) => C,
    cd: (value: C) => D,
    de: (value: D) => E,
  ): (...values: ReadonlyArray<A>) => E;
  <A, B, C, D, E, F>(
    ab: (...values: ReadonlyArray<A>) => B,
    bc: (value: B) => C,
    cd: (value: C) => D,
    de: (value: D) => E,
    ef: (value: E) => F,
  ): (...values: ReadonlyArray<A>) => F;
  <A, B, C, D, E, F, G>(
    ab: (...values: ReadonlyArray<A>) => B,
    bc: (value: B) => C,
    cd: (value: C) => D,
    de: (value: D) => E,
    ef: (value: E) => F,
    fg: (value: F) => G,
  ): (...values: ReadonlyArray<A>) => G;
  <A, B, C, D, E, F, G, H>(
    ab: (...values: ReadonlyArray<A>) => B,
    bc: (value: B) => C,
    cd: (value: C) => D,
    de: (value: D) => E,
    ef: (value: E) => F,
    fg: (value: F) => G,
    gh: (value: G) => H,
  ): (...values: ReadonlyArray<A>) => H;
  <A, B, C, D, E, F, G, H, I>(
    ab: (...values: ReadonlyArray<A>) => B,
    bc: (value: B) => C,
    cd: (value: C) => D,
    de: (value: D) => E,
    ef: (value: E) => F,
    fg: (value: F) => G,
    gh: (value: G) => H,
    hi: (value: H) => I,
  ): (...values: ReadonlyArray<A>) => I;
  <A, B, C, D, E, F, G, H, I, J>(
    ab: (...values: ReadonlyArray<A>) => B,
    bc: (value: B) => C,
    cd: (value: C) => D,
    de: (value: D) => E,
    ef: (value: E) => F,
    fg: (value: F) => G,
    gh: (value: G) => H,
    hi: (value: H) => I,
    ij: (value: I) => J,
  ): (...values: ReadonlyArray<A>) => J;
  <A, B, C, D, E, F, G, H, I, J, K>(
    ab: (...values: ReadonlyArray<A>) => B,
    bc: (value: B) => C,
    cd: (value: C) => D,
    de: (value: D) => E,
    ef: (value: E) => F,
    fg: (value: F) => G,
    gh: (value: G) => H,
    hi: (value: H) => I,
    ij: (value: I) => J,
    jk: (value: J) => K,
  ): (...values: ReadonlyArray<A>) => K;
  <A, B, C, D, E, F, G, H, I, J, K, L>(
    ab: (...values: ReadonlyArray<A>) => B,
    bc: (value: B) => C,
    cd: (value: C) => D,
    de: (value: D) => E,
    ef: (value: E) => F,
    fg: (value: F) => G,
    gh: (value: G) => H,
    hi: (value: H) => I,
    ij: (value: I) => J,
    jk: (value: J) => K,
    kl: (value: K) => L,
  ): (...values: ReadonlyArray<A>) => L;
  <A, B, C, D, E, F, G, H, I, J, K, L, M>(
    ab: (...values: ReadonlyArray<A>) => B,
    bc: (value: B) => C,
    cd: (value: C) => D,
    de: (value: D) => E,
    ef: (value: E) => F,
    fg: (value: F) => G,
    gh: (value: G) => H,
    hi: (value: H) => I,
    ij: (value: I) => J,
    jk: (value: J) => K,
    kl: (value: K) => L,
    lm: (value: L) => M,
  ): (...values: ReadonlyArray<A>) => M;
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N>(
    ab: (...values: ReadonlyArray<A>) => B,
    bc: (value: B) => C,
    cd: (value: C) => D,
    de: (value: D) => E,
    ef: (value: E) => F,
    fg: (value: F) => G,
    gh: (value: G) => H,
    hi: (value: H) => I,
    ij: (value: I) => J,
    jk: (value: J) => K,
    kl: (value: K) => L,
    lm: (value: L) => M,
    mn: (value: M) => N,
  ): (...values: ReadonlyArray<A>) => N;
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>(
    ab: (...values: ReadonlyArray<A>) => B,
    bc: (value: B) => C,
    cd: (value: C) => D,
    de: (value: D) => E,
    ef: (value: E) => F,
    fg: (value: F) => G,
    gh: (value: G) => H,
    hi: (value: H) => I,
    ij: (value: I) => J,
    jk: (value: J) => K,
    kl: (value: K) => L,
    lm: (value: L) => M,
    mn: (value: M) => N,
    no: (value: N) => O,
  ): (...values: ReadonlyArray<A>) => O;
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>(
    ab: (...values: ReadonlyArray<A>) => B,
    bc: (value: B) => C,
    cd: (value: C) => D,
    de: (value: D) => E,
    ef: (value: E) => F,
    fg: (value: F) => G,
    gh: (value: G) => H,
    hi: (value: H) => I,
    ij: (value: I) => J,
    jk: (value: J) => K,
    kl: (value: K) => L,
    lm: (value: L) => M,
    mn: (value: M) => N,
    no: (value: N) => O,
    op: (value: O) => P,
  ): (...values: ReadonlyArray<A>) => P;
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>(
    ab: (...values: ReadonlyArray<A>) => B,
    bc: (value: B) => C,
    cd: (value: C) => D,
    de: (value: D) => E,
    ef: (value: E) => F,
    fg: (value: F) => G,
    gh: (value: G) => H,
    hi: (value: H) => I,
    ij: (value: I) => J,
    jk: (value: J) => K,
    kl: (value: K) => L,
    lm: (value: L) => M,
    mn: (value: M) => N,
    no: (value: N) => O,
    op: (value: O) => P,
    pq: (value: P) => Q,
  ): (...values: ReadonlyArray<A>) => Q;
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>(
    ab: (...values: ReadonlyArray<A>) => B,
    bc: (value: B) => C,
    cd: (value: C) => D,
    de: (value: D) => E,
    ef: (value: E) => F,
    fg: (value: F) => G,
    gh: (value: G) => H,
    hi: (value: H) => I,
    ij: (value: I) => J,
    jk: (value: J) => K,
    kl: (value: K) => L,
    lm: (value: L) => M,
    mn: (value: M) => N,
    no: (value: N) => O,
    op: (value: O) => P,
    pq: (value: P) => Q,
    qr: (value: Q) => R,
  ): (...values: ReadonlyArray<A>) => R;
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>(
    ab: (...values: ReadonlyArray<A>) => B,
    bc: (value: B) => C,
    cd: (value: C) => D,
    de: (value: D) => E,
    ef: (value: E) => F,
    fg: (value: F) => G,
    gh: (value: G) => H,
    hi: (value: H) => I,
    ij: (value: I) => J,
    jk: (value: J) => K,
    kl: (value: K) => L,
    lm: (value: L) => M,
    mn: (value: M) => N,
    no: (value: N) => O,
    op: (value: O) => P,
    pq: (value: P) => Q,
    qr: (value: Q) => R,
    rs: (value: R) => S,
  ): (...values: ReadonlyArray<A>) => S;
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>(
    ab: (...values: ReadonlyArray<A>) => B,
    bc: (value: B) => C,
    cd: (value: C) => D,
    de: (value: D) => E,
    ef: (value: E) => F,
    fg: (value: F) => G,
    gh: (value: G) => H,
    hi: (value: H) => I,
    ij: (value: I) => J,
    jk: (value: J) => K,
    kl: (value: K) => L,
    lm: (value: L) => M,
    mn: (value: M) => N,
    no: (value: N) => O,
    op: (value: O) => P,
    pq: (value: P) => Q,
    qr: (value: Q) => R,
    rs: (value: R) => S,
    st: (value: S) => T,
  ): (...values: ReadonlyArray<A>) => T;
};
