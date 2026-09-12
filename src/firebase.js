import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// BRVO Web App's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYtx0oDdESr75Tg7f0ltpwPEMXeefZrog",
  authDomain: "becrobot-9427c.firebaseapp.com",
  projectId: "becrobot-9427c",
  storageBucket: "becrobot-9427c.firebasestorage.app",
  messagingSenderId: "784045398247",
  appId: "1:784045398247:web:eb33919db14f4b0b546a42"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;
