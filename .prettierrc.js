// Some panel-settings automatically inherited from .editorconfig

module.exports = {
  arrowParens: 'always',

  endOfLine: 'lf',
  printWidth: 110,
  useTabs: false,
  proseWrap: 'never',
  quoteProps: 'consistent',
  semi: true,
  singleQuote: true,
  trailingComma: 'none',

  overrides: [
    {
      files: ['*.json', '*.md', '*.yml'],
      useTabs: true
    },
    {
      files: '.editorconfig',
      options: {
        parser: 'yaml'
      }
    },
    {
      files: '*.html',
      options: {
        parser: 'angular',
        printWidth: 120
      }
    }
  ]
};
