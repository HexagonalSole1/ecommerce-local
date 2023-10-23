import React, { useContext } from 'react';
import { EcommerceContext } from '../../Context/EcommerceContext';
import "./Card.css"

function Card(props) {
  const { addProductToCarrito, allProducts, setAllProducts,allCarrito,idCarrito,setIdCarrito } = useContext(EcommerceContext);
  

  const handleAddToCart = () => {
    const producto = allProducts.find((producto) => producto.id === props.id);

    if (producto) {
      addProductToCarrito(producto.id,producto.nombre, producto.precio, producto.urlImagen, 1);
        setIdCarrito(idCarrito+1)
      const updatedProducts = allProducts.map((p) => {
        if (p.id === producto.id) {
          return {
            ...p,
            cantidad: p.cantidad - 1
          };
        }
        return p;
      });
      setAllProducts(updatedProducts);
    }
    console.log(allCarrito)
  };

  return (
    <div className='DivCard'>
      <div className='DivImagen'>
        <img src={props.urlImagen} alt="" />
      </div>
      <div className='DivInfo'>
        <p>{props.nombre}</p>
        <p>{props.precio}</p>
        <p>{props.cantidad}</p>
      </div>
      <div className="DivBoton">
        <button className='boton-bonito' onClick={handleAddToCart}>
          Añadir al Carrito
        </button>
      </div>
    </div>
  );
}

export default Card;
