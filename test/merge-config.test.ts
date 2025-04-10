import { mergePkgJson } from "../src/merge-pkg-json";

type UserConfig = {
  test?: {
    globals?: boolean;
    environment?: "node" | "jsdom";
  };
};

const configBase: UserConfig = {
  test: {
    globals: false,
    environment: "node",
  },
};

describe("mergePkgJson method", (): void => {
  it("should override globals and retain environment when merging configs", (): void => {
    let output = mergePkgJson(configBase, {
      test: {
        globals: true,
      },
    });

    expect(output).toEqual({
      test: {
        globals: true,
        environment: "node",
      },
    });
  });

  it("should override environment and retain globals when merging configs", (): void => {
    const output = mergePkgJson(configBase, {
      test: {
        environment: "jsdom",
      },
    });

    expect(output).toEqual({
      test: {
        globals: false,
        environment: "jsdom",
      },
    });
  });

  it("should retain default config values when no overrides are provided", (): void => {
    const output = mergePkgJson(configBase, {});

    expect(output).toEqual({
      test: {
        globals: false,
        environment: "node",
      },
    });
  });
});
