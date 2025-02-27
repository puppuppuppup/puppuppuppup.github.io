// @ts-check

import prettier from 'eslint-plugin-prettier';
import tsEslint from 'typescript-eslint';
import eslint from '@eslint/js';

export default tsEslint.config(eslint.configs.recommended, tsEslint.configs.recommended, {
    plugins: {
        prettier,
    },
    rules: {
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
        'no-empty': 'off',
        'no-array-constructor': 'off',
        'no-undef': 'off',
        'prefer-const': 'warn',
        '@typescript-eslint/no-unused-vars': [
            'warn',
            { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
        ],
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@typescript-eslint/no-array-constructor': 'warn',
        '@typescript-eslint/no-duplicate-enum-values': 'warn',
        '@typescript-eslint/no-empty-object-type': 'warn',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-extra-non-null-assertion': 'warn',
        '@typescript-eslint/no-misused-new': 'warn',
        '@typescript-eslint/no-namespace': 'warn',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
        '@typescript-eslint/no-require-imports': 'warn',
        '@typescript-eslint/no-this-alias': 'warn',
        '@typescript-eslint/no-unnecessary-type-constraint': 'warn',
        '@typescript-eslint/no-unsafe-declaration-merging': 'warn',
        '@typescript-eslint/no-unsafe-function-type': 'warn',
        '@typescript-eslint/no-unused-expressions': 'warn',
        '@typescript-eslint/no-wrapper-object-types': 'warn',
        '@typescript-eslint/prefer-as-const': 'warn',
        '@typescript-eslint/prefer-namespace-keyword': 'warn',
        '@typescript-eslint/triple-slash-reference': 'warn',
        'prettier/prettier': [
            'warn',
            {
                endOfLine: 'auto',
                semi: true,
                singleQuote: true,
                printWidth: 100,
                trailingComma: 'all',
                useTabs: false,
                tabWidth: 4,
                jsxSingleQuote: true,
                bracketSpacing: true,
                arrowParens: 'avoid',
            },
        ],
    },
});
