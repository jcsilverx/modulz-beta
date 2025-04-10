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
const pipe = (<A, B extends A>(
  initialValue: A,
  ...pipes: ReadonlyArray<CallbackFn<A, B>>
): A => {
  let len = pipes.length >>> 0;
  let R: A = initialValue;

  if (len === 0) return R;

  let k = 0;

  while (k < len) {
    let pipe = pipes[k];

    R = pipe(R);

    k++;
  }

  return R;
}) as Pipe;

export { pipe };

/**
 * @internal
 *
 * @since 1.0.0
 */
type Pipe = {
  <A>(initialValue: A): A;
  <A, B>(initialValue: A, ab: (value: A) => B): B;
  <A, B, C>(initialValue: A, ab: (value: A) => B, bc: (value: B) => C): C;
  <A, B, C, D>(
    initialValue: A,
    ab: (value: A) => B,
    bc: (value: B) => C,
    cd: (value: C) => D,
  ): D;
  <A, B, C, D, E>(
    initialValue: A,
    ab: (value: A) => B,
    bc: (value: B) => C,
    cd: (value: C) => D,
    de: (value: D) => E,
  ): E;
  <A, B, C, D, E, F>(
    initialValue: A,
    ab: (value: A) => B,
    bc: (value: B) => C,
    cd: (value: C) => D,
    de: (value: D) => E,
    ef: (value: E) => F,
  ): F;
  <A, B, C, D, E, F, G>(
    initialValue: A,
    ab: (value: A) => B,
    bc: (value: B) => C,
    cd: (value: C) => D,
    de: (value: D) => E,
    ef: (value: E) => F,
    fg: (value: F) => G,
  ): G;
  <A, B, C, D, E, F, G, H>(
    initialValue: A,
    ab: (value: A) => B,
    bc: (value: B) => C,
    cd: (value: C) => D,
    de: (value: D) => E,
    ef: (value: E) => F,
    fg: (value: F) => G,
    gh: (value: G) => H,
  ): H;
  <A, B, C, D, E, F, G, H, I>(
    initialValue: A,
    ab: (value: A) => B,
    bc: (value: B) => C,
    cd: (value: C) => D,
    de: (value: D) => E,
    ef: (value: E) => F,
    fg: (value: F) => G,
    gh: (value: G) => H,
    hi: (value: H) => I,
  ): I;
  <A, B, C, D, E, F, G, H, I, J>(
    initialValue: A,
    ab: (value: A) => B,
    bc: (value: B) => C,
    cd: (value: C) => D,
    de: (value: D) => E,
    ef: (value: E) => F,
    fg: (value: F) => G,
    gh: (value: G) => H,
    hi: (value: H) => I,
    ij: (value: I) => J,
  ): J;
  <A, B, C, D, E, F, G, H, I, J, K>(
    initialValue: A,
    ab: (value: A) => B,
    bc: (value: B) => C,
    cd: (value: C) => D,
    de: (value: D) => E,
    ef: (value: E) => F,
    fg: (value: F) => G,
    gh: (value: G) => H,
    hi: (value: H) => I,
    ij: (value: I) => J,
    jk: (value: J) => K,
  ): K;
  <A, B, C, D, E, F, G, H, I, J, K, L>(
    initialValue: A,
    ab: (value: A) => B,
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
  ): L;
  <A, B, C, D, E, F, G, H, I, J, K, L, M>(
    initialValue: A,
    ab: (value: A) => B,
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
  ): M;
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N>(
    initialValue: A,
    ab: (value: A) => B,
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
  ): N;
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>(
    initialValue: A,
    ab: (value: A) => B,
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
  ): O;
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>(
    initialValue: A,
    ab: (value: A) => B,
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
  ): P;
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>(
    initialValue: A,
    ab: (value: A) => B,
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
  ): Q;
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>(
    initialValue: A,
    ab: (value: A) => B,
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
  ): R;
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>(
    initialValue: A,
    ab: (value: A) => B,
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
  ): S;
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>(
    initialValue: A,
    ab: (value: A) => B,
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
  ): T;
};
