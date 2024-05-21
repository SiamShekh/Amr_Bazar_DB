import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  {
    "rules": {
      "@typescript-eslint/no-unused-vars": "error",
      // to enforce using type for object type definitions, can be type or interface 
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    },
    languageOptions: { globals: globals.browser }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];