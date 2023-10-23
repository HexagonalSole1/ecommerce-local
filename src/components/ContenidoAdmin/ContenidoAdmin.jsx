import React, { useContext } from 'react';
import { EcommerceContext } from "../../Context/EcommerceContext";
import Card from '../CardAdmin/CardAdmin';
import CardAnadir from '../CardAnadir/CardAnadir';

function ContenidoAdmin() {
  const { allProducts, addProduct } = useContext(EcommerceContext);

  const handleAddProduct = (newProductData) => {
    // Agregar lógica para añadir un nuevo producto con los datos proporcionados
    addProduct(newProductData);
  };

  return (
    <>
      <div className='DivProductos'>
        {allProducts
          .filter((producto) => producto.cantidad > 0)
          .map((producto) => (
            <Card
              key={producto.id}
              id={producto.id}
              nombre={producto.nombre}
              precio={producto.precio}
              urlImagen={producto.urlImagen}
              cantidad={producto.cantidad}
            />
          ))}
        <CardAnadir onAddProduct={handleAddProduct} />
      </div>
    </>
  );
}

export default ContenidoAdmin;
