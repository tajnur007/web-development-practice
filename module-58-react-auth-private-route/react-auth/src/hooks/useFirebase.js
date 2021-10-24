import { useState } from "react";
import initFirebaseAuth from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

initFirebaseAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [errorMsg, setErrorMsg] = useState('');

    const auth = getAuth();

    const useGoogleAuth = () => {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user);
                console.log(user);
            }).catch((error) => {
                setErrorMsg(error.message);
                console.log(errorMsg);
            });
    }

    return {
        user,
        useGoogleAuth
    };
};

export default useFirebase;