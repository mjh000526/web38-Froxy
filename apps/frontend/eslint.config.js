import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import eslintImport from "eslint-plugin-import";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      import: eslintImport,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "import/order": [
        "error",
        {
          groups: [
            ["builtin", "external"], // 내장 모듈과 외부 모듈 그룹
            ["internal", "parent", "sibling", "index"], // 내부 모듈 그룹
          ],
          pathGroups: [
            {
              pattern: "react",
              group: "builtin",
              position: "before", // react를 최상위에 오도록 설정
            },
            {
              pattern: "react-dom",
              group: "builtin",
              position: "before",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          alphabetize: { order: "asc", caseInsensitive: true }, // 알파벳 순 정렬
        },
      ],
      "sort-imports": [
        "error",
        {
          ignoreDeclarationSort: true, // `import` 자체의 정렬은 무시
          ignoreMemberSort: false, // 세부 항목 정렬은 적용
        },
      ],
    },
  }
);
