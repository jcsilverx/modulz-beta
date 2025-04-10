import type { Either, Left, Right } from "./types";

/**
 * @internal
 *
 * @since 1.0.0
 */
type CallbackFn<A, B> = (value: A) => B;

const right = <R, L = never>(value: R): Either<L, R> => ({
  _tag: "Right",
  right: value,
});

const left = <L, R = never>(value: L): Either<L, R> => ({
  _tag: "Left",
  left: value,
});

const isLeft = <L>(value: Either<L, unknown>): value is Left<L> =>
  value._tag === "Left";

const isRight = <R>(value: Either<unknown, R>): value is Right<R> =>
  value._tag === "Right";

const fromLeft = <L, R, U>(
  e: Either<L, R>,
  callbackFn: CallbackFn<L, U>,
): Either<U, R> => (isLeft(e) ? left(callbackFn(e.left)) : e);

const fromRight = <L, R, U>(
  e: Either<L, R>,
  callbackFn: CallbackFn<R, U>,
): Either<L, U> => (isRight(e) ? right(callbackFn(e.right)) : e);

export { right, left, isLeft, isRight, fromLeft, fromRight };
