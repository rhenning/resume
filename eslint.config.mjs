
import globals from "globals";

import markdown from "@eslint/markdown";


export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser
      }
    }
  },
  ...markdown.configs.recommended
];
