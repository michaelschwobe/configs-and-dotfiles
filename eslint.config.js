// @ts-check
import { includeIgnoreFile } from "@eslint/compat";
import eslint from "@eslint/js";
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

export default tseslint.config(
  // Exclude gitignore paths
  includeIgnoreFile(gitignorePath),

  // JavaScript
  eslint.configs.recommended,

  // TypeScript
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  // Disable TypeScript rules for JavaScript files
  {
    files: ["**/*.js"],
    extends: [tseslint.configs.disableTypeChecked],
  },

  // React
  { settings: { react: { version: "detect" } } },
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],

  // React Hooks
  {
    // @ts-expect-error - works but lib types incorrect
    plugins: { "react-hooks": pluginReactHooks },
    // @ts-expect-error - works but lib types incorrect
    rules: pluginReactHooks.configs.recommended.rules,
  },

  // React Refresh
  pluginReactRefresh.configs.vite,

  // JSX A11y
  pluginJsxA11y.flatConfigs.recommended,
);
