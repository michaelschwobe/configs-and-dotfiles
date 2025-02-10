// @ts-check

/**
 * @see https://knip.dev/overview/configuration
 * @type {import("knip").KnipConfig}
 */
const config = {
  ignoreDependencies: ["tailwindcss"],
  entry: ["src/{index,cli,main}.{js,cjs,mjs,jsx,ts,cts,mts,tsx}", "reset.d.ts"],
  project: [
    "**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}",
    "**/.*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}",
  ],
};

export default config;
