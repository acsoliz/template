import { useAuth, useAuthDispatch } from "../context"
import { AuthActionTypes, AuthFormValues } from "../types";

export function useAuthentication() {

    const state = useAuth(); // reductor
    const dispatch = useAuthDispatch();

    async function signIn({ email, password }: AuthFormValues) {

        // aquii llamar al servicio de antentificacion API
        console.log('En signIn del hook useAuthentications', { email, password })
        console.log('AuthActionTypes.SIGN_IN::', AuthActionTypes.SIGN_IN)
        dispatch({
            type: AuthActionTypes.SIGN_IN,
            payload: { token: '123456sdsd23' }
        })
    }


    async function signOut() {
        dispatch({ type: AuthActionTypes.SIGN_OUT })

    }


    async function signUp({ email, password }: AuthFormValues) {
        // aquii llamar al servicio de antentificacion API
        console.log(email, password)
        dispatch({
            type: AuthActionTypes.SIGN_UP,
            payload: { token: '123456sds d23' }
        })

    }
    async function restoreToken() {
        try {
            // aquii llamar al servicio de antentificacion API
            // const token = await AsyncStorage.getItem('token'); 
            let token = ''
            if (token) {
                dispatch({
                    type: AuthActionTypes.RESTORE_TOKEN,
                    payload: { token }
                })

            }
        } catch (error) {
            console.log(error)
        }
    }

    return {
        ...state,
        signIn,
        signOut,
        signUp,
        restoreToken
    }


}