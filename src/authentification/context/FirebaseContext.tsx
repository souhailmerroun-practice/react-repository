import { createContext, FC, useEffect, useState } from 'react';
import { User } from '@firebase/auth-types';
import {
    onAuthStateChanged,
    createUserWithEmailAndPassword as firebaseCreateUserWithEmailAndPassword,
    signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword,
    signOut as firebaseSignOut,
    UserCredential,
} from 'firebase/auth';
import { auth } from '../config/firebase';

interface InterfaceFirebaseContext {
    currentUser: User | null
    createUserWithEmailAndPassword: (email: string, password: string) => Promise<UserCredential>
    signInWithEmailAndPassword: (email: string, password: string) => Promise<UserCredential>
    signOut: () => Promise<void>
}

const signInWithEmailAndPassword = (email: string, password: string) => {
    return firebaseSignInWithEmailAndPassword(auth, email, password)
}

const createUserWithEmailAndPassword = (email: string, password: string) => {
    return firebaseCreateUserWithEmailAndPassword(auth, email, password)
}

const signOut = () => {
    return firebaseSignOut(auth);
}

export const FirebaseContext = createContext<InterfaceFirebaseContext>({
    currentUser: null,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
});

interface Props {
    children: React.ReactNode;
}

export const FirebaseContextProvider: FC<Props> = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // @ts-ignore
            setCurrentUser(currentUser)
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <FirebaseContext.Provider value={{ currentUser, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut }}>
            {loading ? <p>Loading...</p> : children}
        </FirebaseContext.Provider>
    );
}