// @ts-check

/**
 * @see https://knip.dev/overview/configuration
 * @type {import("knip").KnipConfig}
 */
const config = {
  ignoreDependencies: ["@react-router/node", "isbot", "tailwindcss"],
  entry: ["app/{root,routes}.{ts,tsx}", "reset.d.ts"],
  project: ["**/*.{js,ts,tsx}", "**/.*.{js,ts,tsx}"],
};

export default config;
