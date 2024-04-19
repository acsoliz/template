import React, { useEffect, createContext, useState } from 'react';
import { ImagePickerResponse } from 'react-native-image-picker';
import authApi from '../api/authApi';
import { Producto, ProductsResponse } from '../interfaces/appInterfaces';

type ProductsContextProps = {
  products: Producto[];
  loadProducts: () => Promise<void>;
  addProduct: (categoryId: string, productName: string) => Promise<Producto>;
  updateProduct: (categoryId: string, productName: string, productId: string) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
  loadProductById: (id: string) => Promise<Producto>;
  uploadImage: (data: any, id: string) => Promise<void>;
}

export const ProductsContext = createContext({} as ProductsContextProps);


export const ProductsProvider = ({ children }: any) => {
  console.log('en ProductsProvider::: ')

  const [products, setProducts] = useState<Producto[]>([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {

    const resp = await authApi.get<ProductsResponse>('/productos');
    //const resp = await authApi.get<ProductsResponse>('/goals?limite=50');
    setProducts([...products, ...resp.data.productos]);
    //setProducts([...resp.data.productos]);

  };

  const addProduct = async (categoryId: string, productName: string): Promise<Producto> => {

    const resp = await authApi.post<Producto>('/productos', {
      nombre: productName,
      categoria: categoryId,
    });
    setProducts([...products, resp.data]);

    return resp.data;

  };

  const updateProduct = async (categoryId: string, productName: string, productId: string) => {
    const resp = await authApi.put<Producto>(`/productos/${productId}`, {
      nombre: productName,
      categoria: categoryId,
    });
    setProducts(products.map(prod => {
      return (prod._id === productId)
        ? resp.data
        : prod;
    }));

  };

  const deleteProduct = async (id: string) => {

  };

  const loadProductById = async (id: string) => {

    const resp = await authApi.get<Producto>(`/api/goals/${id}`);
    return resp.data;

  };

  const uploadImage = async (data: ImagePickerResponse, id: string) => {

    const fileToUpload = {
      uri: data.assets[0].uri,
      type: data.assets[0].type,
      name: data.assets[0].fileName,
    };

    const formData = new FormData();
    formData.append('archivo', fileToUpload);

    try {

      const resp = await authApi.put(`/uploads/productos/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log(JSON.stringify(resp.data, null, 2));

    } catch (error) {
      console.log(JSON.stringify(error.response, null, 2));
    }

  };


  return (
    <ProductsContext.Provider value={{
      products,
      loadProducts,
      addProduct,
      updateProduct,
      deleteProduct,
      loadProductById,
      uploadImage,
    }}>
      {children}
    </ProductsContext.Provider>
  );
};
