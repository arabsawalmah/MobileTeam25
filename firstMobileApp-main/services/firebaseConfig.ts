import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBkGzS-aWCSKitIcKwEJQODyUhVB3P3RIQ",
  authDomain: "asdsddsd-c45b6.firebaseapp.com",
  projectId: "asdsddsd-c45b6",
  storageBucket: "asdsddsd-c45b6.firebasestorage.app",
  messagingSenderId: "380856559961",
  appId: "1:380856559961:web:ad0fd0eb37b0a9827c0448",
  measurementId: "G-XPQNZ2MG8X"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export default app;
