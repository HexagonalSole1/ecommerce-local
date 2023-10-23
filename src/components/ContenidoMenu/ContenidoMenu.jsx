import React, { useContext } from 'react';
import { EcommerceContext } from '../../Context/EcommerceContext';
import Card from '../Card/Card';
import "./ContenidoMenu.css"

function ContenidoMenu() {
  const { allProducts, addProduct } = useContext(EcommerceContext);

  const handleAgregarProducto = () => {
    const nuevoId = allProducts.length + 1;
    addProduct(nuevoId, 'Nuevo Producto', 10, 'https://fotografias.larazon.es/clipping/cmsimages01/2023/05/16/EE2C5D7F-6DE5-482E-8C6E-D033104BA3E2/sabias-que-tomate-fruta_95.jpg?crop=8192,4606,x0,y441&width=1028&height=578&optimize=medium&format=webply', 15);
  };

  return (
    <>
      <div className='DivProductos'>
        {allProducts
          .filter((producto) => producto.cantidad > 0)
          .map((producto) => (
            <Card
              key={producto.id} // Usar un id único como clave
              id={producto.id} // Pasar el id del producto
              nombre={producto.nombre}
              precio={producto.precio}
              urlImagen={producto.urlImagen}
              cantidad={producto.cantidad}
            />
          ))}
        {allProducts.length === 0 && (
          <p className="NoProductosMessage">No hay productos disponibles.</p>
        )}
      </div>
    </>
  );
}

export default ContenidoMenu;
