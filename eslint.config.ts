import { globalIgnores } from 'eslint/config';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import pluginVue from 'eslint-plugin-vue';
import eslintConfigPrettier from 'eslint-config-prettier';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },
  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),
  pluginVue.configs['flat/recommended'],
  vueTsConfigs.recommended,
  skipFormatting,
  eslintConfigPrettier,
  {
    rules: {
      'no-unused-vars': 'off',
      'no-console': 'warn',
      'quotes': ['error', 'single'],
      'comma-dangle': ['error', 'always-multiline'],
      'semi': ['warn', 'always'],
      'object-curly-spacing': ['error', 'always'],
      'indent': ['error', 2],
      'no-invalid-void-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'vue/html-self-closing': [
        'error',
        { html: { normal: 'never', void: 'always', 'component': 'always' } },
      ],
      'vue/no-v-html': 'off',
      'vue/html-indent': 'warn',
      'vue/max-attributes-per-line': 'warn',
      'vue/html-closing-bracket-spacing': 'warn',
      'vue/html-closing-bracket-newline': 'warn',
      'vue/singleline-html-element-content-newline': 'warn',
      'vue/multiline-html-element-content-newline': 'warn',
      'vue/component-name-in-template-casing': ['warn', 'kebab-case'],
      'vue/block-order': [
        'error',
        { order: ['template', 'script[setup]', 'style'] },
      ],
    },
  },
);
