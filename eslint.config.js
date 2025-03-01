// @ts-check
import { includeIgnoreFile } from "@eslint/compat";
import eslintJs from "@eslint/js";
import pluginJson from "@eslint/json";
import pluginMarkdown from "@eslint/markdown";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import tseslint from "typescript-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, ".gitignore");

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
const config = [
  // Exclusions
  includeIgnoreFile(gitignorePath),

  // Markdown
  {
    ...pluginMarkdown.configs.recommended[0],
    files: ["**/*.md"],
    language: "markdown/gfm",
  },

  // JSON
  {
    ...pluginJson.configs.recommended,
    files: ["**/*.json"],
    ignores: ["tsconfig.*.json"],
    language: "json/json",
  },

  // JSONC
  {
    ...pluginJson.configs.recommended,
    files: ["**/*.jsonc", ".vscode/*.json", "tsconfig.json", "tsconfig.*.json"],
    language: "json/jsonc",
  },

  // JavaScript
  {
    files: ["**/*.js", "**/*.ts", "**/*.tsx"],
    rules: eslintJs.configs.recommended.rules,
  },

  // TypeScript
  ...[
    ...tseslint.configs.recommended,
    ...tseslint.configs.stylisticTypeChecked,
  ].map((conf) => ({
    ...conf,
    files: ["**/*.ts", "**/*.tsx"],
  })),

  // JavaScript & TypeScript
  {
    files: ["**/*.js", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  // React
  {
    ...pluginReact.configs.flat.recommended,
    files: ["**/*.ts", "**/*.tsx"],
    settings: { react: { version: "detect" } },
  },

  // React JSX Runtime
  {
    ...pluginReact.configs.flat["jsx-runtime"],
    files: ["**/*.ts", "**/*.tsx"],
  },

  // React Hooks
  {
    ...pluginReactHooks.configs["recommended-latest"],
    files: ["**/*.ts", "**/*.tsx"],
  },

  // React Refresh
  {
    ...pluginReactRefresh.configs.vite,
    files: ["**/*.ts", "**/*.tsx"],
  },

  // JSX A11y
  {
    ...pluginJsxA11y.flatConfigs.recommended,
    files: ["**/*.js", "**/*.ts", "**/*.tsx"],
  },
];

export default config;
