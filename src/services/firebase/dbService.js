import { db, auth } from "./firebase-config";
import {
  collection,
  doc,
  getDocs,
  query,
  where,
  addDoc,
} from "firebase/firestore";

// Получение userDocId для текущего пользователя
export const getUserDocId = async () => {
  const userId = auth.currentUser?.uid;

  if (!userId) {
    console.error("User is not authenticated");
    return null;
  }

  try {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("userId", "==", userId));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.error("No user found with this ID");
      return null;
    }

    return querySnapshot.docs[0].id;
  } catch (err) {
    console.error("Error fetching user document ID:", err);
    return null;
  }
};

// Добавление нового набора слов
export const addSet = async (title, words) => {
  const userDocId = await getUserDocId();
  if (!userDocId) return;

  try {
    const setRef = collection(db, "users", userDocId, "sets");
    const newSet = await addDoc(setRef, { title });

    const wordsRef = collection(setRef, newSet.id, "words");
    for (const { word, translation } of words) {
      await addDoc(wordsRef, { word, translation });
    }
  } catch (err) {
    console.error("Error adding set:", err);
  }
};

// Получение всех наборов
export const getAllSets = async () => {
  const userDocId = await getUserDocId();
  if (!userDocId) return [];

  try {
    const setsRef = collection(db, "users", userDocId, "sets");
    const q = query(setsRef, where("isFavorite", "==", true));
    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => ({title: doc.data().title, isChecked: doc.data().isFavorite}));
  } catch (err) {
    console.error("Error fetching sets:", err);
    return [];
  }
};
