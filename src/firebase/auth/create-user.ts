'use client';

import {
  Auth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { doc, setDoc, getFirestore } from 'firebase/firestore';
import { setDocumentNonBlocking } from '../non-blocking-updates';

export async function createUser(
  auth: Auth,
  email: string,
  password: string,
  username: string
) {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;

  // Update the user's profile with the username
  await updateProfile(user, {
    displayName: username,
  });

  // Create a user document in Firestore
  const db = getFirestore(auth.app);
  const userRef = doc(db, 'users', user.uid);
  const userData = {
    id: user.uid,
    email: user.email,
    username: username,
    registrationDate: new Date().toISOString(),
  };

  setDocumentNonBlocking(userRef, userData, { merge: false });

  return userCredential;
}
