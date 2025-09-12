// @ts-check

/**
 * @see https://knip.dev/overview/configuration
 * @type {import("knip").KnipConfig}
 */
const config = {
  ignoreDependencies: ["tailwindcss"],
  entry: ["app/{root,routes}.{ts,tsx}"],
  project: ["**/*.{js,ts,tsx}"],
};

export default config;
