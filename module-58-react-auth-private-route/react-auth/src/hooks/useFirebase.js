import { useEffect, useState } from "react";
import initFirebaseAuth from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

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
                setErrorMsg('');
            }).catch((error) => {
                setErrorMsg(error.message);
            });
    }

    const createAccount = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setErrorMsg('');
            })
            .catch((error) => {
                setErrorMsg(error.message);
            });
    }

    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setErrorMsg('');
            })
            .catch((error) => {
                setErrorMsg(error.message);
            });
    }

    const logout = () => {
        signOut(auth).then(() => {
            setUser({});
            setErrorMsg('');
        }).catch((error) => {
            setErrorMsg(error.message);
        });
    }

    return {
        user,
        errorMsg,
        logout,
        login,
        createAccount,
        useGoogleAuth
    };
};

export default useFirebase;