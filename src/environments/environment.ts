// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// authDomain: 'http://gdgzh-website.dev:4200',
export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCc9jbKYA7MMKgUkO-vvGOWxDMKnvHpeSg',
    authDomain: 'gdg-website-development.firebaseapp.com',
    databaseURL: 'https://gdg-website-development.firebaseio.com',
    projectId: 'gdg-website-development',
    storageBucket: 'gdg-website-development.appspot.com',
    messagingSenderId: '199447551154'
  }
};
