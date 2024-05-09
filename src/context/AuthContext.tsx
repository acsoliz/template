/* eslint-disable curly */
import React, { createContext, useReducer, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import authApi from '../api/authApi';

import { LoginData, LoginResponse, RegisterData, Usuario } from '../interfaces/appInterfaces';
import { authReducer, AuthState } from './authReducer';

type AuthContextProps = {
  errorMessage: string;
  token: string | null;
  user: Usuario | null;
  status: 'checking' | 'authenticated' | 'not-authenticated';
  signUp: (registerData: RegisterData) => void;
  signIn: (loginData: LoginData) => void;
  logOut: () => void;
  removeError: () => void;
};

const authInicialState: AuthState = {
  status: 'checking',
  token: null,
  user: null,
  errorMessage: '',
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {

  const [state, dispatch] = useReducer(authReducer, authInicialState);

  useEffect(() => {

    checkToken();

  }, []);


  const checkToken = async () => {
    const token = await AsyncStorage.getItem('token');
    console.log('', token)
    if (!token) return dispatch({ type: 'notAuthenticated' });

    try {
      const resp = await authApi.get('/api/auth/validation', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (resp.status !== 200) {
        throw new Error('Token verification failed');
      }

      dispatch({
        type: 'signUp',
        payload: {
          token: resp.data.token,
          user: resp.data.user,
        },
      });
    } catch (error) {
      await AsyncStorage.removeItem('token');
      dispatch({ type: 'notAuthenticated' });
    }
  };

  const signIn = async ({ correo, password }: LoginData) => {
    try {

      const result = await authApi.post<LoginResponse>('api/auth/login', { email: correo, password: password });//TODO el backend espera un objeto : {username, password }. como solucionarlo desde el frontend ?
      const data = result.data;
      dispatch({
        type: 'signUp',
        payload: {
          token: data.token,
          user: data.usuario,
        },
      });
      await AsyncStorage.setItem('token', data.token);

    } catch (error) {
      dispatch({
        type: 'addError',
        payload: error?.response?.data?.msg || 'Información incorrecta',
      });
    }
  };

  const signUp = async ({ nombre, correo, password }: RegisterData) => {// the name should be registerUser
    try {

      console.log('en signup, :::')
      const response = await authApi.post<LoginResponse>('api/auth/register', { email: correo, password, name: nombre });
      console.log('respuesta del POSTT, response:::', response)
      const data = response.data;
      console.log('respuesta del POSTT, data:::', data)
      dispatch({
        type: 'signUp',
        payload: {
          token: data.token,
          user: data.usuario,
        },
      });

      await AsyncStorage.setItem('token', data.token);

    } catch (error) {
      dispatch({
        type: 'addError',
        payload: error?.response?.data.errors[0].msg || 'Revise la información',
      });
    }
  };

  const logOut = async () => {
    console.log('removiendo el item de asynstorage',)
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'logout' });
  };

  const removeError = () => {
    dispatch({ type: 'removeError' });
  };


  return (
    <AuthContext.Provider value={{
      ...state,
      signUp,
      signIn,
      logOut,
      removeError,
    }}>
      {children}
    </AuthContext.Provider>
  );
};
