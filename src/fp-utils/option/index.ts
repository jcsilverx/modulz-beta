import type { None, Option, Some } from "../../types";

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
const isNone = (o: Option<unknown>): o is None => o._tag === "None";

/**
 * @internal
 *
 * @since 1.0.0
 */
const isSome = <T>(o: Option<T>): o is Some<T> => o._tag === "Some";

/**
 * @internal
 *
 * @since 1.0.0
 */
const none: Option<never> = {
  _tag: "None",
};

/**
 * @internal
 *
 * @since 1.0.0
 */
const some = <T>(value: T): Option<T> => ({
  _tag: "Some",
  value: value,
});

/**
 * @internal
 *
 * @since 1.0.0
 */
const from = <T, U>(o: Option<T>, callbackFn: CallbackFn<T, U>): Option<U> =>
  isSome(o) ? some(callbackFn(o.value)) : none;

export { isNone, isSome, none, some, from };
