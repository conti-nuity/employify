import { auth } from "../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export const login = (email: string, password: string) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        resolve(user);
      })
      .catch((error) => reject(error));
  });
};
