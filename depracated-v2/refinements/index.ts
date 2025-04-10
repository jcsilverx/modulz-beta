import { tagTester } from "@zphyrx/fp-core";

const isObject = (value: unknown): value is object =>
  typeof value === "object" &&
  value !== null &&
  !Array.isArray(value) &&
  tagTester(value, "Object");

export { isObject };
