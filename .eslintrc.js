module.exports = {
  root: true,
  extends: ['plugin:@angular-eslint/recommended'],

  rules: {
    '@angular-eslint/directive-selector': [
      'error',
      { type: 'attribute', prefix: 'app', style: 'camelCase' },
    ],

    '@angular-eslint/component-selector': [
      'error',
      { type: 'element', prefix: 'app', style: 'kebab-case' },
    ],
  },

  overrides: [
    {
      files: ['*.component.html'],
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {
        'max-len': ['error', { code: 140 }],
      },
    },

    {
      files: ['*.component.ts'],
      extends: ['plugin:@angular-eslint/template/process-inline-templates'],
    },

    {
      files: ['*.ts'],
      extends: [
        'airbnb-typescript/base',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      rules: {
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'class-methods-use-this': 'off',
        'lines-between-class-members': 'off',
        '@typescript-eslint/unbound-method': [
          'error',
          {
            ignoreStatic: true,
          },
        ],
      },
    },

    {
      files: ['*.spec.ts'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },

    {
      files: ['src/**/*.spec.ts', 'src/**/*.d.ts'],
      parserOptions: {
        project: './tsconfig.spec.json',
      },
      extends: ['plugin:jasmine/recommended'],
      plugins: ['jasmine'],
      env: { jasmine: true },
    },

    {
      files: ['e2e/**/*.e2e-spec.ts', 'e2e/**/*.po.ts'],
      parserOptions: {
        project: './e2e/tsconfig.json',
      },
      extends: ['plugin:protractor/recommended'],
      plugins: ['protractor'],
      rules: {
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      },
    },
  ],
};
