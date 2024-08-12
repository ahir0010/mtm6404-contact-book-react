import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfS8NUhLIScxwI5zCZa6Uec4GRgeyisGY",
  authDomain: "contact-book-ad90d.firebaseapp.com",
  projectId: "contact-book-ad90d",
  storageBucket: "contact-book-ad90d.appspot.com",
  messagingSenderId: "755211495207",
  appId: "1:755211495207:web:8674694b006bb5437e2b02",
  measurementId: "G-YS5KF2L6CX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;