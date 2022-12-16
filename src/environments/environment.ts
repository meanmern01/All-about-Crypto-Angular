// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCO1maFGojTeEepOjz0lDY6QOlOrBxIG50",
    authDomain: "all-about-crypto-angular.firebaseapp.com",
    projectId: "all-about-crypto-angular",
    storageBucket: "all-about-crypto-angular.appspot.com",
    messagingSenderId: "485514907719",
    appId: "1:485514907719:web:3f3f3ba288d5f8773fe162"
  }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
