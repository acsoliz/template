import React, { useEffect, createContext, useState } from 'react';
import { ImagePickerResponse } from 'react-native-image-picker';
import authApi from '../api/authApi';
import { Category, CategoriesResponse } from '../interfaces/appInterfaces';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';


type CategoriesContextProps = {
  categories: Category[];
  loadCategories: () => Promise<void>;
}

export const CategoriesContext = createContext({} as CategoriesContextProps);


export const CategoriesProvider = ({ children }: any) => {
  const { status } = useContext(AuthContext);


  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    if (status === 'authenticated') {
      loadCategories();
    }
  }, [status]);


  const loadCategories = async () => {
    const resp = await authApi.get<CategoriesResponse>('api/categories');
    console.log('resp?.data?.categories:::', resp?.data?.categories)
    setCategories([...categories, ...resp?.data?.categories]);
  };




  return (
    <CategoriesContext.Provider value={{
      categories,
      loadCategories,

    }}>
      {children}
    </CategoriesContext.Provider>
  );
};
