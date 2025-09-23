// @ts-check

/**
 * @see https://knip.dev/overview/configuration
 * @type {import("knip").KnipConfig}
 */
const config = {
  entry: ["src/{index,main}.{ts,tsx}", "reset.d.ts"],
  project: ["**/*.{js,ts,tsx}"],
};

export default config;
