import { initializeApp, getApp, getApps, FirebaseApp } from 'firebase/app';
import { getDatabase, Database } from 'firebase/database';
import { firebaseConfig } from './config';

// Use the compat libraries
import 'firebase/compat/database';
import firebase from 'firebase/compat/app';


interface FirebaseInstances {
  app: firebase.app.App;
  db: firebase.database.Database;
}

let firebaseApp: firebase.app.App;
let database: firebase.database.Database;

export function initializeFirebase(): FirebaseInstances {
  if (!firebase.apps.length) {
    try {
      firebaseApp = firebase.initializeApp(firebaseConfig);
      database = firebase.database();
    } catch (e) {
      console.error('Could not initialize Firebase', e);
    }
  } else {
    firebaseApp = firebase.app();
    database = firebase.database();
  }

  return {
    app: firebaseApp,
    db: database,
  };
}
