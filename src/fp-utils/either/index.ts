import type { Either, Left, Right } from "../../types";

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
const right = <R, L = never>(value: R): Either<L, R> => ({
  _tag: "Right",
  right: value,
});

/**
 * @internal
 *
 * @since 1.0.0
 */
const left = <L, R = never>(value: L): Either<L, R> => ({
  _tag: "Left",
  left: value,
});

/**
 * @internal
 *
 * @since 1.0.0
 */
const isLeft = <L>(value: Either<L, unknown>): value is Left<L> =>
  value._tag === "Left";

/**
 * @internal
 *
 * @since 1.0.0
 */
const isRight = <R>(value: Either<unknown, R>): value is Right<R> =>
  value._tag === "Right";

/**
 * @internal
 *
 * @since 1.0.0
 */
const fromLeft =
  <L, U>(callbackFn: CallbackFn<L, U>) =>
  <R>(e: Either<L, R>): Either<U, R> =>
    isLeft(e) ? left(callbackFn(e.left)) : e;

/**
 * @internal
 *
 * @since 1.0.0
 */
const fromRight =
  <R, U>(callbackFn: CallbackFn<R, U>) =>
  <L>(e: Either<L, R>): Either<L, U> =>
    isRight(e) ? right(callbackFn(e.right)) : e;

export { left, right, isLeft, isRight, fromLeft, fromRight };
