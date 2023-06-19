const attributePattern = '(?:\\[(.*?)\\]){0,1}';

module.exports = {
  plugins: [
    "stylelint-selector-bem-pattern"
  ],
  rules: {
    'plugin/selector-bem-pattern': {
      implicitComponents: true,
      componentSelectors: {
        initial(componentName) {
          return new RegExp(`^\\.${componentName}$`);
        },
      },
    },
  }
}
