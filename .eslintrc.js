// https://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  //
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.*.json',
        alwaysTryTypes: true
      }
    }
  },
  //
  ignorePatterns: ['src/environments', 'node_modules/*', '.*js'],
  //
  plugins: [
    'import', // https://github.com/benmosher/eslint-plugin-import#eslint-plugin-import
    'simple-import-sort', // https://github.com/lydell/eslint-plugin-simple-import-sort#eslint-plugin-simple-import-sort
    'sort-keys-fix', // https://github.com/leo-buneev/eslint-plugin-sort-keys-fix#usage
    'unicorn', // https://github.com/sindresorhus/eslint-plugin-unicorn#usage
    'jsdoc', // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc
    'lodash', // https://github.com/wix/eslint-plugin-lodash#configuration
    'you-dont-need-momentjs', // Moment is deprecated, https://github.com/you-dont-need/You-Dont-Need-Momentjs#you-dont-may-not-need-momentjs
    'prettier' // https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
  ],
  //
  extends: [
    'eslint:recommended',

    'plugin:you-dont-need-momentjs/recommended',
    'plugin:lodash/recommended',

    'plugin:prettier/recommended'
  ],
  rules: {
    /**
     * JSDoc rules.
     * @see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc
     */
    'jsdoc/check-alignment': 'warn',
    'jsdoc/check-line-alignment': ['warn', 'always'],
    'jsdoc/check-property-names': ['warn', { enableFixer: true }],
    'jsdoc/no-bad-blocks': 'warn',
    'jsdoc/require-returns-type': 'warn',
    'jsdoc/valid-types': 'warn',

    /**
     * Lodash
     * @see https://github.com/wix/eslint-plugin-lodash#list-of-provided-rules
     */
    'lodash/import-scope': 'off',
    'lodash/prefer-noop': 'off',
    'lodash/prefer-lodash-method': 'off',
    'lodash/prefer-constant': 'off',

    /**
     * Sort keys in obj
     * @see https://github.com/leo-buneev/eslint-plugin-sort-keys-fix#usage
     */
    'sort-keys-fix/sort-keys-fix': 'off',

    /**
     * Unicorn
     * @see https://github.com/sindresorhus/eslint-plugin-unicorn#rules
     */
    // Possible Errors
    'unicorn/better-regex': 'error',
    'unicorn/expiring-todo-comments': 'warn',
    'unicorn/no-fn-reference-in-iterator': 'warn',
    'unicorn/no-nested-ternary': 'warn',
    'unicorn/no-unsafe-regex': 'error',
    'unicorn/no-unused-properties': 'warn',
    'unicorn/prefer-string-slice': 'error',
    'unicorn/prevent-abbreviations': 'off'
  },
  // Overrides
  overrides: [
    {
      /**
       * [*.ts] Typescript
       */
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        createDefaultProgram: true,
        project: './tsconfig.*.json',
        tsconfigRootDir: './'
      },
      plugins: [
        '@typescript-eslint', // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md#getting-started---linting-your-typescript-codebase
        'rxjs', // https://www.npmjs.com/package/eslint-plugin-rxjs#install
        '@angular-eslint' // https://github.com/angular-eslint/angular-eslint#migrating-from-codelyzer-and-tslint
      ],
      extends: [
        'airbnb-typescript/base',

        'plugin:@typescript-eslint/recommended', // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
        'plugin:@typescript-eslint/recommended-requiring-type-checking', // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#recommended-configs

        'plugin:@angular-eslint//recommended', // https://github.com/angular-eslint/angular-eslint#rules-list
        'plugin:rxjs/recommended', // https://www.npmjs.com/package/eslint-plugin-rxjs#rules

        'prettier/@typescript-eslint',
        'plugin:prettier/recommended'
      ],
      rules: {
        /**
         * ESLint rules.
         * @see https://eslint.org/docs/2.0.0/rules/
         */
        'class-methods-use-this': 'off',
        'no-underscore-dangle': 'off',
        'prefer-template': 'error',
        'quote-props': ['error', 'consistent-as-needed'],
        'no-template-curly-in-string': 'error',
        'array-callback-return': 'error',
        'consistent-return': 'error',
        'curly': 'error',
        'default-case': 'error',
        'dot-location': ['error', 'property'],
        'dot-notation': 'error',
        'eqeqeq': 'error',
        'grouped-accessor-pairs': 'error',
        'no-alert': 'error',
        'no-caller': 'error',
        'no-constructor-return': 'error',
        'no-div-regex': 'error',
        'no-else-return': [
          'error',
          {
            allowElseIf: false
          }
        ],
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-label': 'error',
        'no-floating-decimal': 'error',
        'no-implicit-coercion': 'error',
        'no-implied-eval': 'error',
        'no-invalid-this': 'error',
        'no-iterator': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-loop-func': 'error',
        'no-multi-spaces': [
          'error',
          {
            exceptions: {
              Property: true,
              VariableDeclarator: true,
              ImportDeclaration: true
            }
          }
        ],
        'no-multi-str': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': 'error',
        'no-proto': 'error',
        'no-return-assign': 'error',
        'no-script-url': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-throw-literal': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-useless-call': 'error',
        'no-useless-concat': 'error',
        'no-useless-return': 'error',
        'no-void': 'error',
        'prefer-named-capture-group': 'error',
        'prefer-promise-reject-errors': 'error',
        'prefer-regex-literals': 'error',
        'radix': 'error',
        'require-unicode-regexp': 'error',
        'vars-on-top': 'error',
        'wrap-iife': ['error', 'inside'],
        'yoda': 'error',
        'no-label-var': 'error',
        'no-shadow': [
          'off',
          {
            builtinGlobals: true,
            hoist: 'all'
          }
        ],
        'no-undef-init': 'error',
        'no-undefined': 'error',
        'no-use-before-define': 'error',
        'callback-return': 'error',
        'global-require': 'error',
        'handle-callback-err': 'error',
        'no-buffer-constructor': 'error',
        'no-new-require': 'error',
        'no-path-concat': 'error',
        'no-process-env': 'error',
        'no-sync': 'error',
        'array-bracket-newline': [
          'off',
          {
            minItems: 3
          }
        ],
        'array-bracket-spacing': [
          'off',
          'always',
          {
            singleValue: false,
            arraysInArrays: false,
            objectsInArrays: false
          }
        ],
        'array-element-newline': [
          'off',
          {
            minItems: 3
          }
        ],
        'block-spacing': ['error', 'always'],
        'camelcase': 'error',
        'comma-dangle': ['error', 'never'],
        'comma-style': ['error', 'last'],
        'computed-property-spacing': [
          'error',
          'never',
          {
            enforceForClassMembers: true
          }
        ],
        'consistent-this': 'error',
        'eol-last': 'error',
        'func-name-matching': 'error',
        'func-names': ['error', 'as-needed'],
        'func-style': [
          'error',
          'declaration',
          {
            allowArrowFunctions: true
          }
        ],

        'id-length': [
          'error',
          {
            min: 1,
            max: 32
          }
        ],
        'implicit-arrow-linebreak': ['error', 'beside'],
        'jsx-quotes': ['error', 'prefer-double'],
        'key-spacing': 'error',
        'keyword-spacing': 'error',
        'linebreak-style': 'error',
        'lines-between-class-members': [
          'error',
          'always',
          {
            exceptAfterSingleLine: true
          }
        ],
        'max-depth': 'error',
        'max-len': [
          'error',
          {
            code: 110,
            ignoreTemplateLiterals: true,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreComments: true,
            ignorePattern:
              'import\\s+?(?:(?:(?:[\\w*\\s{},]*)\\s+from\\s+?)|)(?:(?:".*?")|(?:\'.*?\'))[\\s]*?(?:;|$|)'
          }
        ],
        'max-nested-callbacks': ['error', 3],
        'max-params': ['error', 6],
        'max-statements-per-line': 'error',
        'new-parens': ['error', 'always'],
        'newline-per-chained-call': 'error',
        'no-bitwise': 'error',
        'no-lonely-if': 'error',
        'no-multi-assign': 'error',
        'no-multiple-empty-lines': 'error',
        'no-negated-condition': 'error',
        'no-nested-ternary': 'error',
        'no-new-object': 'error',
        'no-plusplus': [
          'error',
          {
            allowForLoopAfterthoughts: true
          }
        ],
        'no-trailing-spaces': 'error',
        'no-unneeded-ternary': 'error',
        'no-whitespace-before-property': 'error',
        'nonblock-statement-body-position': ['error', 'below'],
        'object-curly-spacing': ['error', 'always'],
        'object-property-newline': 'error',
        'one-var': ['error', 'never'],
        'one-var-declaration-per-line': ['error', 'always'],
        'operator-assignment': ['error', 'always'],
        'operator-linebreak': ['error', 'before'],
        'padding-line-between-statements': [
          'error',
          {
            blankLine: 'always',
            prev: 'directive',
            next: '*'
          },
          {
            blankLine: 'any',
            prev: 'directive',
            next: 'directive'
          },
          {
            blankLine: 'always',
            prev: ['const', 'let', 'var'],
            next: '*'
          },
          {
            blankLine: 'any',
            prev: ['const', 'let', 'var'],
            next: ['const', 'let', 'var']
          },
          {
            blankLine: 'always',
            prev: '*',
            next: 'return'
          },
          {
            blankLine: 'always',
            prev: '*',
            next: 'multiline-block-like'
          }
        ],
        'prefer-exponentiation-operator': 'error',
        'prefer-object-spread': 'error',
        'semi-spacing': [
          'error',
          {
            before: false,
            after: true
          }
        ],
        'semi-style': ['error', 'last'],
        'space-before-blocks': 'error',
        'space-in-parens': 'error',
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'spaced-comment': 'error',
        'switch-colon-spacing': 'error',
        'template-tag-spacing': 'error',
        'wrap-regex': 'error',
        'arrow-body-style': 'error',
        'arrow-parens': ['error', 'always'],
        'arrow-spacing': 'error',
        'no-confusing-arrow': 'error',
        'no-duplicate-imports': [
          'error',
          {
            includeExports: true
          }
        ],
        'no-useless-computed-key': 'error',
        'no-useless-rename': 'error',
        'no-var': 'error',
        'object-shorthand': [
          'error',
          'always',
          {
            avoidQuotes: true
          }
        ],
        'prefer-arrow-callback': 'error',
        'prefer-const': 'error',
        'prefer-numeric-literals': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'rest-spread-spacing': ['error', 'never'],
        'symbol-description': 'error',
        'template-curly-spacing': 'error',

        /**
         * Typescript
         */
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/lines-between-class-members': [
          'error',
          'always',
          {
            exceptAfterSingleLine: true
          }
        ],
        '@typescript-eslint/class-literal-property-style': ['error', 'getters'],
        '@typescript-eslint/consistent-type-assertions': [
          'error',
          {
            assertionStyle: 'as',
            objectLiteralTypeAssertions: 'never'
          }
        ],
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/member-delimiter-style': [
          'error',
          {
            multiline: {
              delimiter: 'semi'
            },
            singleline: {
              delimiter: 'semi'
            }
          }
        ],
        '@typescript-eslint/member-ordering': [
          'error',
          {
            default: [
              'signature',
              'public-static-field',
              'protected-static-field',
              'private-static-field',
              'public-instance-field',
              'protected-instance-field',
              'private-instance-field',
              'public-abstract-field',
              'protected-abstract-field',
              'private-abstract-field',
              'public-field',
              'protected-field',
              'private-field',
              'static-field',
              'instance-field',
              'abstract-field',
              'field',
              'public-constructor',
              'protected-constructor',
              'private-constructor',
              'constructor',
              'public-static-method',
              'protected-static-method',
              'private-static-method',
              'public-instance-method',
              'protected-instance-method',
              'private-instance-method',
              'public-abstract-method',
              'protected-abstract-method',
              'private-abstract-method',
              'public-method',
              'protected-method',
              'private-method',
              'static-method',
              'instance-method',
              'abstract-method',
              'method'
            ]
          }
        ],
        '@typescript-eslint/method-signature-style': ['error', 'property'],
        '@typescript-eslint/naming-convention': [
          'off',
          {
            selector: 'default',
            format: ['camelCase', 'PascalCase']
          },
          {
            selector: 'variable',
            format: ['camelCase', 'UPPER_CASE']
          },
          {
            selector: 'parameter',
            format: ['camelCase'],
            leadingUnderscore: 'allow'
          },
          {
            selector: 'memberLike',
            modifiers: ['private'],
            format: ['camelCase'],
            leadingUnderscore: 'require'
          },
          {
            selector: 'typeLike',
            format: ['PascalCase']
          },
          {
            selector: 'interface',
            format: ['PascalCase'],
            prefix: ['I']
          },
          {
            selector: 'typeParameter',
            format: ['PascalCase'],
            prefix: ['T']
          },
          {
            selector: 'enum',
            format: ['PascalCase'],
            prefix: ['E']
          },
          {
            selector: 'variable',
            types: ['boolean'],
            format: ['PascalCase'],
            prefix: ['is', 'should', 'has', 'can', 'did', 'will']
          }
        ],
        '@typescript-eslint/no-base-to-string': 'error',
        '@typescript-eslint/no-dynamic-delete': 'error',
        '@typescript-eslint/no-extra-non-null-assertion': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-implied-eval': 'error',
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-misused-promises': 'error',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/no-throw-literal': 'error',
        '@typescript-eslint/no-type-alias': 'error',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        '@typescript-eslint/no-unnecessary-type-arguments': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-unsafe-return': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/prefer-reduce-type-parameter': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        '@typescript-eslint/prefer-regexp-exec': 'error',
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        '@typescript-eslint/promise-function-async': 'off',
        '@typescript-eslint/require-array-sort-compare': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error',

        /**
         * Typescript + ESLint
         */
        'brace-style': 'off',
        '@typescript-eslint/brace-style': 'error',
        'comma-spacing': 'off',
        '@typescript-eslint/comma-spacing': [
          'error',
          {
            before: false,
            after: true
          }
        ],
        'default-param-last': 'off',
        '@typescript-eslint/default-param-last': 'error',
        'func-call-spacing': 'off',
        '@typescript-eslint/func-call-spacing': 'error',
        'indent': 'off',
        '@typescript-eslint/indent': [
          'error',
          2,
          {
            SwitchCase: 1,
            VariableDeclarator: 'first',
            FunctionExpression: {
              parameters: 'first'
            },
            FunctionDeclaration: {
              parameters: 'first'
            },
            CallExpression: {
              arguments: 'first'
            }
          }
        ],
        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': 'error',
        'no-dupe-class-members': 'off',
        '@typescript-eslint/no-dupe-class-members': 'error',
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'error',
        'no-extra-parens': 'off',
        '@typescript-eslint/no-extra-parens': 'error',
        'no-extra-semi': 'off',
        '@typescript-eslint/no-extra-semi': 'error',
        'no-magic-numbers': 'off',
        '@typescript-eslint/no-magic-numbers': [
          'off',
          {
            enforceConst: true,
            detectObjects: true,
            ignoreEnums: true
          }
        ],
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': 'error',
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        'quotes': 'off',
        '@typescript-eslint/quotes': ['error', 'single'],
        'require-await': 'off',
        '@typescript-eslint/require-await': 'error',
        'no-return-await': 'off',
        '@typescript-eslint/return-await': 'error',
        'semi': 'off',
        '@typescript-eslint/semi': [
          'error',
          'always',
          {
            omitLastInOneLineBlock: true
          }
        ],
        //
        'prefer-destructuring': 'off',
        'space-before-function-paren': 'off',
        '@typescript-eslint/space-before-function-paren': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        'no-restricted-syntax': 'off',
        'no-console': 'off',

        /**
         * Import rules
         * @see https://github.com/benmosher/eslint-plugin-import#rules
         */
        'import/prefer-default-export': 'off',

        /**
         * Simple import sorts
         * @see https://github.com/lydell/eslint-plugin-simple-import-sort#example-configuration
         */
        // eslint rule
        'sort-imports': 'off',
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              ['^@angular?\\w'],
              ['^@?\\w'],
              ['^\\u0000\\w'],
              ['^lodash?\\w'],
              ['^rxjs?\\w'],
              ['^ng*?\\w'],

              ['^@env?\\w'],

              ['^@app?\\w'],
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$']
            ]
          }
        ],
        'simple-import-sort/exports': 'error',

        /**
         * Rxjs
         */
        'rxjs/no-subject-value': 'warn',
        'rxjs/no-implicit-any-catch': 'off',
        'rxjs/no-sharereplay': 'warn',
        'rxjs/no-unbound-methods': 'off',


        /**
         * Angular
         */
        '@angular-eslint/component-class-suffix': 'error',
        '@angular-eslint/use-pipe-transform-interface': 'error',
        '@angular-eslint/component-selector': [
          'error',
          {
            type: 'element',
            prefix: ['app', 'jabil'],
            style: 'kebab-case'
          }
        ],
        '@angular-eslint/directive-class-suffix': 'error',
        '@angular-eslint/directive-selector': [
          'error',
          {
            type: 'attribute',
            prefix: ['app', 'jabil'],
            style: 'camelCase'
          }
        ],
        '@typescript-eslint/unbound-method': 'off'
      }
    },
    /**
     * [*.component.ts] Angular Components Typescript
     */
    {
      files: ['*.component.ts'],
      parserOptions: {
        project: './tsconfig.app.json'
      },
      plugins: ['@angular-eslint/template'],
      processor: '@angular-eslint/template/extract-inline-html',
      extends: ['plugin:@angular-eslint/template/process-inline-templates']
    },
    /**
     * [*.component.html] Angular Components Templates
     */
    {
      files: ['*.component.html'],
      parser: '@angular-eslint/template-parser',
      parserOptions: {
        project: './tsconfig.app.json',
        ecmaFeatures: {
          jsx: true
        }
      },
      plugins: ['@angular-eslint/template'],
      processor: '@angular-eslint/template/extract-inline-html',

      extends: [
        'plugin:@angular-eslint/template/recommended',
        'plugin:@angular-eslint/template/process-inline-templates'
      ],
      rules: {
        '@angular-eslint/template-no-negated-async': 'warn',
        '@angular-eslint/template-no-call-expression': 'warn',
        '@angular-eslint/template-banana-in-box': 'error'
      }
    },
    /**
     * [*.spec.ts] Unit tests
     */
    {
      files: ['src/**/*.spec.ts', 'src/**/*.d.ts'],
      parserOptions: {
        project: './tsconfig.spec.json'
      },
      env: {
        jasmine: true
      },

      plugins: ['jasmine'], // https://www.npmjs.com/package/eslint-plugin-jasmine#configuration
      extends: ['plugin:jasmine/recommended'], // https://www.npmjs.com/package/eslint-plugin-jasmine#rules
      rules: {
        'implicit-arrow-linebreak': 'off'
      }
    }
  ]
};
