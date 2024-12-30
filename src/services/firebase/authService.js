// authService.js
// Работа с аутентификацией

import { useState, useEffect } from 'react';
import { auth, googleProvider } from './firebase-config';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
} from 'firebase/auth';

export const AuthService = () => {
  const [user, setUser] = useState(null);

  // Подписка на изменения состояния аутентификации
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe(); // Очистка подписки при размонтировании компонента
  }, []);

  const signInWithEmail = async (email, password) => {
    try {
      // Установка сохранения сессии
      await setPersistence(auth, browserLocalPersistence);

      // Регистрация и вход
      await createUserWithEmailAndPassword(auth, email, password);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log('Пользователь вошел:', userCredential.user);
    } catch (error) {
      console.error('Ошибка входа по Email:', error.message);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log('Пользователь вошел через Google:', result.user);
    } catch (error) {
      console.error('Ошибка входа через Google:', error.message);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      console.log('Пользователь вышел из системы');
    } catch (error) {
      console.error('Ошибка при выходе:', error.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="d-flex mb-20">
        <button className="btn btn-dark" onClick={signInWithGoogle}>
          Sign In With Google
        </button>
        <button className="btn btn-light" onClick={logout}>
          Logout
        </button>
      </div>
      {/* Компонент CheckUser удалён */}
    </div>
  );
};
