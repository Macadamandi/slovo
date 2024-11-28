// Работа с базой данных Firestore
import { useEffect, useState } from 'react';
import { db, auth } from './firebase-config';
import { getDocs, collection, addDoc, deleteDoc, updateDoc, doc } from 'firebase/firestore';

export const addSet = async (setTitle) => {
    const user = auth.currentUser;
    try {
      if(user) {
        const userId = user.uid;
  
        // Добавляем новый набор в подколлекцию "sets"
        const setRef = await addDoc(collection(db, "users", userId, "sets"), {
          title: setTitle,
        });

        // Добавление слов в подколекцию words
        const wordsRef = collection(db, "users", userId, "sets", setRef.id, 'words');

        await addDoc(wordsRef, {
          word: 'banana',
          translation: 'банан'
        });

        await addDoc(wordsRef, {
          word: 'banana',
          translation: 'банан'
        });
      }
    } catch (err) {
      console.error(err);
    }
}
