import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import firebaseApp from "./initialize";

const auth = getAuth(firebaseApp);

// Signed up
export default async function singUp(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    return user
  } catch (error) {
    // const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    throw new Error("Email Exceed")
  }
}

// Signed in

export async function signIn(email, password) {
  try {
    
    console.log(email, password);
    const userCredential = await signInWithEmailAndPassword(auth ,email, password);
    
    
    const user = userCredential.user;
    
    return user
  } catch (error) {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    console.error(error.message)
    throw new Error("wrong password")
  }
}