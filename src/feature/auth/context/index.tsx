import React, { Dispatch, createContext, useContext, useReducer } from "react"
import { AuthAction, AuthProviderProps, AuthState } from "../types";
import { authReducer } from "../reducer";

export const initialState: AuthState = {
    isAuthenticated: false,
    signIn: () => { },
    signOut: () => { },
    signUp: () => { },
    restoreToken: () => { },
    user: null,
    isLoading: false,
};


export const AuthContext = createContext<[AuthState, Dispatch<AuthAction>]>([
    initialState,
    () => { },
]);

export const useAuth = () => useContext(AuthContext)[0];

export const useAuthDispatch = () => useContext(AuthContext)[1];


export const AuthProvider = ({ children }: AuthProviderProps) => {
    return (
        <AuthContext.Provider value={useReducer(authReducer, initialState)}>
            {children}
        </AuthContext.Provider>
    )
};
