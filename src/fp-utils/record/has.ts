import type { ReadonlyRecord } from "../../types";

/**
 * @internal
 *
 * @since 1.0.0
 */
const has = Object.hasOwn as <K extends string, T>(
  r: ReadonlyRecord<K, T>,
  Pk: PropertyKey,
) => boolean;

export { has };
