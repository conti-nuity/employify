import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {
  NEXT_PUBLIC_GOOGLE_API_KEY,
  NEXT_PUBLIC_GOOGLE_AUTH_DOMAIN,
  NEXT_PUBLIC_GOOGLE_PROJECT_ID,
  NEXT_PUBLIC_GOOGLE_STORAGE_BUCKET,
  NEXT_PUBLIC_GOOGLE_MESSAGING_SENDER_ID,
  NEXT_PUBLIC_GOOGLE_APP_ID,
  //@ts-ignore
} from "@env";

interface firebaseConfigProps {
  apiKey: string | undefined;
  authDomain: string | undefined;
  projectId: string | undefined;
  storageBucket: string | undefined;
  messagingSenderId: string | undefined;
  appId: string | undefined;
}

// Your web app's Firebase configuration
const firebaseConfig: firebaseConfigProps = {
  apiKey: NEXT_PUBLIC_GOOGLE_API_KEY,
  authDomain: NEXT_PUBLIC_GOOGLE_AUTH_DOMAIN,
  projectId: NEXT_PUBLIC_GOOGLE_PROJECT_ID,
  storageBucket: NEXT_PUBLIC_GOOGLE_STORAGE_BUCKET,
  messagingSenderId: NEXT_PUBLIC_GOOGLE_MESSAGING_SENDER_ID,
  appId: NEXT_PUBLIC_GOOGLE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
