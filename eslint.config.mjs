import tsEslint from 'typescript-eslint';
import reactEslintPlugin from 'eslint-plugin-react'
import reactHooksEslintPlugin from 'eslint-plugin-react-hooks'

export default [
	{ignores: ['node_modules/*', 'dist/*']},
  {
    files: ["src/**/*.ts", "src/**/*.tsx"],
    languageOptions: {
      parser: tsEslint.parser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tsEslint.plugin,
      'react': reactEslintPlugin,
      'react-hooks': reactHooksEslintPlugin,
    },
    rules: {
      ...tsEslint.configs.recommended.rules,
      ...reactEslintPlugin.configs['jsx-runtime'].rules,
      ...reactHooksEslintPlugin.configs.recommended.rules,
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",
    }
  },
];