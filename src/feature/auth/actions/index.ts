import { AuthAction, AuthActionTypes } from "../types";

export function signIn({ token }: { token: string }): AuthAction {
  return {
    type: AuthActionTypes.SIGN_IN,
    payload: { token },
  };
}

export function signOut() {
  return {
    type: AuthActionTypes.SIGN_OUT,
  };
}

export function signUp({ token }: { token: string }): AuthAction {
  console.log("En signUp, token::", token);
  return {
    type: AuthActionTypes.SIGN_UP,
    payload: { token },
  };
}

export function signRestore({ token }: { token: string }): AuthAction {
  return {
    type: AuthActionTypes.RESTORE_TOKEN,
    payload: { token },
  };
}
