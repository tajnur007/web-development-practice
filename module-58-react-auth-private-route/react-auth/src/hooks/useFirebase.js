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
                console.log(user);
            }).catch((error) => {
                setErrorMsg(error.message);
                console.log(errorMsg);
            });
    }

    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            errorMsg = error.message;
        });
    }

    return {
        user,
        logout,
        useGoogleAuth
    };
};

export default useFirebase;