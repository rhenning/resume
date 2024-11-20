import globals from "globals";

import pluginJs from "@eslint/js";
import pluginJs from "@eslint/json";
import pluginJs from "@eslint/markdown";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: { globals: globals.browser },
    plugins: {
      json,
      markdown,
    },
  }
];
