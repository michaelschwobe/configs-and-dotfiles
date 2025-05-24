// @ts-check

/**
 * @see https://knip.dev/overview/configuration
 * @type {import("knip").KnipConfig}
 */
const config = {
  ignoreDependencies: ["tailwindcss"],
  entry: ["src/{index,main}.{ts,tsx}", "reset.d.ts"],
  project: ["**/*.{js,ts,tsx}", "**/.*.{js,ts,tsx}"],
};

export default config;
