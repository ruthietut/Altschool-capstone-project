import { createContext, useEffect, useContext, useState, ReactNode } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    User as FirebaseUser,
} from "firebase/auth";
import { auth } from "../firebase/services";
import { Auth } from "firebase-admin/auth";

interface User {
    // Define the properties of your user object here
}

interface UserContextProps {
    createUser: (email: string, password: string) => Promise<typeof auth>,
    user: User,
    logout: () => Promise<void>,
    signIn: (email: string, password: string) => Promise<typeof auth>,
}

const UserContext = createContext<UserContextProps>({} as UserContextProps);

interface AuthContextProviderProps {
    children: ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    const createUser = (email: string, password: string) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email: string, password: string) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logout = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser: FirebaseUser | null) => {
            console.log(currentUser);
            setUser(currentUser || {});
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <UserContext.Provider value={{ createUser, user, logout, signIn }}>
            {children}
        </UserContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(UserContext);
};
