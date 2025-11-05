import { initializeApp, getApp, getApps, FirebaseApp } from 'firebase/app';
import { getDatabase, Database } from 'firebase/database';
import { firebaseConfig } from './config';

interface FirebaseInstances {
  app: FirebaseApp;
  db: Database;
}

let firebaseApp: FirebaseApp;
let database: Database;

export function initializeFirebase(): FirebaseInstances {
  if (!getApps().length) {
    try {
      firebaseApp = initializeApp(firebaseConfig);
      database = getDatabase(firebaseApp);
    } catch (e) {
      console.error('Could not initialize Firebase', e);
    }
  } else {
    firebaseApp = getApp();
    database = getDatabase(firebaseApp);
  }

  return {
    app: firebaseApp,
    db: database,
  };
}
