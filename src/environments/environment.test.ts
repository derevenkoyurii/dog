const packageJson = require('../../package.json');

export const environment = {
  appName: 'Client',
  envName: 'TEST',
  production: false,
  test: true,
  i18nPrefix: 'client',
  versions: {
    app: packageJson.version,
    angular: packageJson.dependencies['@angular/core'],
    rxjs: packageJson.dependencies.rxjs,
    angularCli: packageJson.devDependencies['@angular/cli'],
    typescript: packageJson.devDependencies.typescript
  }
};
