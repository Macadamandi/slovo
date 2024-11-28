// Работа с аутентификацией

import { useState } from "react";
import { auth, googleProvider } from "./firebase-config";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthService = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  } 

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  } 

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  } 


  return(
    // <Content>
    <>
    <input type="email" placeholder="Email.." onChange={(e) => setEmail(e.target.value)}/>
      <input type="password" placeholder="Password.." onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={signIn}>Sign in</button>
      <button onClick={signInWithGoogle}>Sign In With Google</button>
      <button onClick={logout}>Logout</button>
    </>
      
      // <DbService/>
    // </Content>
  );
}