import { AuthActionTypes } from "../types";
import { initialState } from "../context";
import { AuthAction, AuthState } from "../types";

export const authReducer = (state: AuthState, action: AuthAction) => {
  console.log("EnauthReducer: con actions::", action.type);
  console.log("EnauthReducer: con state::", {
    ...state,
    user: action.payload,
    isAuthenticated: true,
  });
  switch (action.type) {
    case AuthActionTypes.SIGN_IN:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case AuthActionTypes.SIGN_UP:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case AuthActionTypes.SIGN_OUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    case AuthActionTypes.RESTORE_TOKEN:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    default:
      return initialState;
  }
};
