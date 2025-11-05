
"use client";

import { useState, useEffect } from 'react';
import { getDatabase, ref, onValue, off } from 'firebase/database';
import { initializeFirebase } from '@/firebase';

// Initialize Firebase and get a reference to the database
const { db } = initializeFirebase();

export function useRealtimeData(path: string) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!db) {
        setError(new Error("Firebase database is not initialized."));
        setLoading(false);
        return;
    }

    const dbRef = ref(db, path);
    setLoading(true);

    const unsubscribe = onValue(dbRef, (snapshot) => {
      try {
        const val = snapshot.val();
        setData(val);
        setError(null);
      } catch (e: any) {
        console.error("Firebase data processing error:", e);
        setError(e);
      } finally {
        setLoading(false);
      }
    }, (err) => {
      console.error("Firebase read error:", err);
      setError(err);
      setLoading(false);
    });

    // Cleanup function to detach the listener when the component unmounts
    return () => {
      off(dbRef, 'value', unsubscribe);
    };
  }, [path]); // Rerun effect if the path changes

  return { data, loading, error };
}
