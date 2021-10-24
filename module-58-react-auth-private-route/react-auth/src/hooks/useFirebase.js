import { useEffect, useState } from "react";
import initFirebaseAuth from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

initFirebaseAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [errorMsg, setErrorMsg] = useState('');

    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, [auth]);

    const useGoogleAuth = () => {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user);
            }).catch((error) => {
                setErrorMsg(error.message);
            });
    }

    const logout = () => {
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            setErrorMsg(error.message);
        });
    }

    return {
        user,
        errorMsg,
        logout,
        useGoogleAuth
    };
};

export default useFirebase;