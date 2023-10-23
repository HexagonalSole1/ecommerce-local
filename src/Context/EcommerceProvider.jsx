import { useEffect, useState } from 'react';
import { EcommerceContext } from './EcommerceContext';


export const EcommerceProvider=({children})=>{
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

      const addProductToCarrito = (id, nombre, precio, urlImagen, cantidad) => {
        // Verificar si el producto ya está en el carrito
        const existingProduct = allCarrito.find((producto) => producto.id === id);
      
        if (existingProduct) {
          // Si el producto existe, actualiza la cantidad sumando 1
          const updatedCarrito = allCarrito.map((producto) => {
            if (producto.id === id) {
              return { ...producto, cantidad: producto.cantidad + 1 };
            }
            return producto;
          });
          setCarrito(updatedCarrito);
        } else {
          // Si el producto no existe, agrégalo al carrito
          const nuevoProducto = {
            id,
            nombre,
            precio,
            urlImagen,
            cantidad,
          };
      
          const nuevaListaDeProductos = [...allCarrito, nuevoProducto];
          setCarrito(nuevaListaDeProductos);
        }
      };
      
      
      const removeProductFromCarrito = (id) => {
        const nuevaListaDeProductos = allCarrito.filter((producto) => producto.id !== id);
        setCarrito(nuevaListaDeProductos);
      };
    return (
        <EcommerceContext.Provider
          value={{
            allProducts,
            setAllProducts,
            addProduct,


            //Carrito
            allCarrito,
            setCarrito,
            addProductToCarrito,
            removeProductFromCarrito,

            //ids
            idCarrito,
            setIdCarrito,
           

            


            
    
          }}
        >
          {children}
        </EcommerceContext.Provider>
      );

}