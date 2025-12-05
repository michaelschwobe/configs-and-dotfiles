// @ts-check

import { fileURLToPath } from "node:url";
import eslintReact from "@eslint-react/eslint-plugin";
import { includeIgnoreFile } from "@eslint/compat";
import eslintJs from "@eslint/js";
import pluginJson from "@eslint/json";
import pluginMarkdown from "@eslint/markdown";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import pluginReactRefresh from "eslint-plugin-react-refresh";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

const config = defineConfig([
  // Exclusions
  includeIgnoreFile(
    fileURLToPath(new URL(".gitignore", import.meta.url)),
    "Imported .gitignore patterns",
  ),

  // JavaScript
  {
    files: ["**/*.{js,jsx}"],
    name: eslintJs.meta.name,
    plugins: { js: eslintJs },
    extends: ["js/recommended"],
  },

  // TypeScript
  {
    files: ["**/*.{ts,tsx}"],
    name: tseslint.plugin.meta.name,
    plugins: { js: eslintJs, ts: tseslint.plugin },
    extends: [
      "js/recommended",
      "ts/strict-type-checked",
      "ts/stylistic-type-checked",
    ],
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
    },
  },

  // React
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    name: eslintReact.meta.name,
    plugins: { react: eslintReact },
    extends: ["react/recommended-type-checked"],
  },

  // React Refresh
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    // @ts-expect-error - `name` exists in lib but not type definition
    name: pluginReactRefresh.configs.vite.name,
    plugins: { reactRefresh: pluginReactRefresh },
    extends: ["reactRefresh/vite"],
    rules: {
      "react-refresh/only-export-components": [
        "error",
        { allowExportNames: ["meta", "links", "headers", "loader", "action"] },
      ],
    },
  },

  // JSX Accessibility
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ...pluginJsxA11y.flatConfigs.recommended,
  },

  // JavaScript & TypeScript
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    name: "JS TS globals & parserOptions",
    languageOptions: {
      globals: { ...globals.browser },
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  // JSON
  {
    files: ["**/*.json"],
    name: pluginMarkdown.meta.name,
    plugins: { json: pluginJson },
    language: "json/json",
    extends: ["json/recommended"],
    ignores: ["tsconfig.*.json"],
  },

  // JSONC
  {
    files: ["**/*.jsonc", ".vscode/*.json", "tsconfig.json", "tsconfig.*.json"],
    name: pluginMarkdown.meta.name,
    plugins: { json: pluginJson },
    language: "json/jsonc",
    extends: ["json/recommended"],
  },

  // Markdown
  {
    files: ["**/*.md"],
    name: pluginMarkdown.meta.name,
    plugins: { markdown: pluginMarkdown },
    language: "markdown/gfm",
    extends: ["markdown/recommended"],
  },
]);

export default config;
