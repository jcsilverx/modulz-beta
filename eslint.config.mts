import * as zphyrx from "@zphyrx/eslint-config";

import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

const config: FlatConfig.ConfigArray = zphyrx.config(
  {
    framework: false,
    testing: "vitest",
    prettier: true,
  },
  {
    name: "@zphyrx/eslint-config",
    rules: {
      "prefer-const": "off",
    },
  },
  {
    name: "@zphyrx/eslint-config/typescript",
    rules: {
      "@typescript-eslint/array-type": "off",
      "@typescript-eslint/restrict-template-expressions": [
        "error",
        {
          allowNumber: true,
        },
      ],
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
    },
  },
  {
    name: "@zphyrx/eslint-config/vitest",
    files: ["**/?(*.)+(spec|test).ts"],
    rules: {
      "vitest/max-expects": [
        "warn",
        {
          max: 2,
        },
      ],
    },
  },
  {
    name: "@zphyrx/eslint-config/import-x",
    rules: {
      "import-x/no-unresolved": "off",
    },
  },
);

export default config;
