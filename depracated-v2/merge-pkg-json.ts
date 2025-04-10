import { isObject } from "./refinements";

import type { Config, PlainRecord } from "./types";

const mergePkgJson = <T extends PlainRecord, O extends PlainRecord>(
  defaults: Config<T>,
  overrides: Config<O>,
): PlainRecord => {
  let to: PlainRecord = { ...defaults };

  for (let Pk in overrides) {
    if (!Object.hasOwn(overrides, Pk)) continue;

    let overrideValue = overrides[Pk];
    let defaultValue = defaults[Pk];

    if (isObject(overrideValue) && isObject(defaultValue)) {
      to[Pk] = mergePkgJson(defaultValue, overrideValue);
    } else {
      to[Pk] = overrideValue;
    }
  }

  return to;
};

export { mergePkgJson };
