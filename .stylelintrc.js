// https://github.com/stylelint/stylelint/blob/master/docs/user-guide/get-started.md#getting-started
module.exports = {
  plugins: [
    'stylelint-scss' // https://github.com/kristerkari/stylelint-scss#installation-and-usage
  ],
  extends: [
    'stylelint-config-standard', // https://github.com/stylelint/stylelint-config-standard#usage
    'stylelint-config-rational-order', // https://github.com/constverum/stylelint-config-rational-order#usage
    'stylelint-config-prettier' // https://github.com/prettier/stylelint-prettier#recommended-configuration
  ],
  rules: {
    /**
     * Stylelint rules
     */
    'at-rule-no-unknown': null,
    'at-rule-no-vendor-prefix': true,
    'media-feature-name-no-vendor-prefix': true,
    'no-empty-source': null,
    'property-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,
    'selector-pseudo-element-colon-notation': 'single',
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['ng-deep']
      }
    ],
    'selector-type-no-unknown': null,
    'value-no-vendor-prefix': true,
    /**
     * Scss rules.
     * @see https://github.com/kristerkari/stylelint-scss#list-of-rules
     */
    'scss/at-rule-no-unknown': true
  }
};
