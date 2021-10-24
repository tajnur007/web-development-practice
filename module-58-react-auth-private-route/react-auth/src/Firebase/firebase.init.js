import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initFirebaseApp = () => {
    initializeApp(firebaseConfig);
}

export default initFirebaseApp;