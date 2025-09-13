// @ts-check

/**
 * @see https://prettier.io/docs/en/configuration
 * @typedef {import("prettier").Config} PrettierConfig
 * @typedef {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} SortImportsConfig
 * @typedef {import("prettier-plugin-tailwindcss").PluginOptions} TailwindConfig
 * @typedef {PrettierConfig & SortImportsConfig & TailwindConfig} Config
 * @type {Config}
 */
const config = {
  plugins: [
    "@prettier/plugin-oxc",
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],

  // Settings for: @ianvs/prettier-plugin-sort-imports
  importOrder: [
    // Enforce a blank line after top of file comments
    // and add spaces between import groups with: ""
    "",
    // Node.js built-in modules
    "<BUILTIN_MODULES>",
    // Third party modules
    "<THIRD_PARTY_MODULES>",
    // Custom aliased modules
    "^(#src)(/.*)$",
    // Relative Non-CSS modules
    "^(?!.*[.]css$)[./].*$",
    "",
    // Relative CSS modules
    ".css$",
  ],
  importOrderTypeScriptVersion: "5.9.2",

  // Settings for: prettier-plugin-tailwindcss
  tailwindFunctions: ["clsx", "cn", "cva", "cx"],
  tailwindStylesheet: "./src/index.css",

  overrides: [
    {
      files: ["**/*.mdx"],
      options: {
        htmlWhitespaceSensitivity: "ignore",
        proseWrap: "preserve",
      },
    },
  ],
};

export default config;
