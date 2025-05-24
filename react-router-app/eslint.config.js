// @ts-check
import eslintReact from "@eslint-react/eslint-plugin";
import { includeIgnoreFile } from "@eslint/compat";
import eslintJs from "@eslint/js";
import pluginJson from "@eslint/json";
import pluginMarkdown from "@eslint/markdown";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
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
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
  ].map((conf) => ({
    ...conf,
    files: ["**/*.ts", "**/*.tsx"],
  })),
  {
    files: ["**/*.ts", "**/*.tsx"],
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
    ...eslintReact.configs["recommended-type-checked"],
    files: ["**/*.ts", "**/*.tsx"],
  },

  // React Refresh
  {
    ...pluginReactRefresh.configs.vite,
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      ...pluginReactRefresh.configs.vite.rules,
      "react-refresh/only-export-components": [
        "error",
        {
          allowExportNames: ["meta", "links", "headers", "loader", "action"],
        },
      ],
    },
  },

  // JSX A11y
  {
    ...pluginJsxA11y.flatConfigs.recommended,
    files: ["**/*.js", "**/*.ts", "**/*.tsx"],
  },
];

export default config;
