// @ts-check

/**
 * @see https://prettier.io/docs/en/configuration
 * @typedef {import("prettier").Config} PrettierConfig
 * @typedef {import("@trivago/prettier-plugin-sort-imports").PluginConfig} SortImportsConfig
 * @typedef {import("prettier-plugin-tailwindcss").PluginOptions} TailwindConfig
 * @typedef {PrettierConfig & SortImportsConfig & TailwindConfig} Config
 * @type {Config}
 */
const config = {
  overrides: [
    {
      files: ["**/*.mdx"],
      options: { proseWrap: "preserve", htmlWhitespaceSensitivity: "ignore" },
    },
  ],
  importOrder: ["^#src/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  tailwindFunctions: ["clsx", "cn", "cva", "cx"],
  tailwindStylesheet: "./src/index.css",
};

export default config;
