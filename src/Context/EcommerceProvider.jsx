import React, { useState } from 'react';
import { EcommerceContext } from './EcommerceContext';

export const EcommerceProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [allCarrito, setCarrito] = useState([]);
  const [idCarrito, setIdCarrito] = useState(1);

  const addProduct = (id, nombre, precio, urlImagen, cantidad) => {
    const nuevoProducto = {
      id,
      nombre,
      precio,
      urlImagen,
      cantidad,
    };

    const nuevaListaDeProductos = [...allProducts, nuevoProducto];
    setAllProducts(nuevaListaDeProductos);
  };

  const getAvailableQuantity = (productId) => {
    const product = allProducts.find((producto) => producto.id === productId);
    return product ? product.cantidad : 0;
  };

  const addProductToCarrito = (id, nombre, precio, urlImagen, cantidad) => {
    const existingProduct = allCarrito.find((producto) => producto.id === id);
    const availableQuantity = getAvailableQuantity(id);

    if (existingProduct) {
      if (existingProduct.cantidad + 1 <= availableQuantity) {
        const updatedCarrito = allCarrito.map((producto) => {
          if (producto.id === id) {
            return { ...producto, cantidad: producto.cantidad + 1 };
          }
          return producto;
        });
        setCarrito(updatedCarrito);
      }
    } else {
      if (availableQuantity > 0) {
        const productToAdd = allProducts.find((producto) => producto.id === id);

        if (productToAdd) {
          const nuevoProducto = { ...productToAdd, cantidad: 1 };
          const nuevaListaDeCarrito = [...allCarrito, nuevoProducto];
          setCarrito(nuevaListaDeCarrito);
        }
      }
    }
  };

  const removeProductFromCarrito = (id) => {
    // Actualiza el carrito eliminando el producto específico
    const nuevaListaDeCarrito = allCarrito.filter((producto) => producto.id !== id);
    setCarrito(nuevaListaDeCarrito);
  };

  return (
    <EcommerceContext.Provider
      value={{
        allProducts,
        setAllProducts,
        addProduct,
        getAvailableQuantity,
        allCarrito,
        setCarrito,
        addProductToCarrito,
        removeProductFromCarrito,
        idCarrito,
        setIdCarrito,
      }}
    >
      {children}
    </EcommerceContext.Provider>
  );
};
