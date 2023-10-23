import React, { useContext, useState } from 'react';
import { EcommerceContext } from '../../Context/EcommerceContext';
import './CardAdmin.css';

function Card(props) {
  const {
    addProductToCarrito,
    removeProductFromCarrito,
    allProducts,
    setAllProducts,
    allCarrito,
    idCarrito,
    setIdCarrito,
  } = useContext(EcommerceContext);

  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState({});

  const handleAddToCart = () => {
    const producto = allProducts.find((producto) => producto.id === props.id);

    if (producto) {
      addProductToCarrito(idCarrito, producto.nombre, producto.precio, producto.urlImagen, 1);
      setIdCarrito(idCarrito + 1);
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
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditedProduct(props);
  };

  const handleSaveEdit = () => {
    // Guarda los detalles del producto editado y actualiza el estado
    const updatedProducts = allProducts.map((product) => {
      if (product.id === editedProduct.id) {
        return editedProduct;
      }
      return product;
    });
    setAllProducts(updatedProducts);

    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleDelete = () => {
    // Elimina el producto de la lista
    const updatedProducts = allProducts.filter((product) => product.id !== props.id);
    setAllProducts(updatedProducts);
  };

  return (
    <div className='DivCard'>
      <div className='DivImagen'>
        <img src={props.urlImagen} alt="" />
      </div>
      <div className='DivInfo'>
        {isEditing ? (
          <div>
            <input
              type="text"
              value={editedProduct.nombre}
              onChange={(e) => setEditedProduct({ ...editedProduct, nombre: e.target.value })}
            />
            <input
              type="number"
              value={editedProduct.precio}
              onChange={(e) => setEditedProduct({ ...editedProduct, precio: Number(e.target.value) })}
            />
            <input
              type="number"
              value={editedProduct.cantidad}
              onChange={(e) => setEditedProduct({ ...editedProduct, cantidad: Number(e.target.value) })}
            />
          </div>
        ) : (
          <div>
            <p>Nombre: {props.nombre}</p>
            <p>Precio: {props.precio}</p>
            <p>Cantidad: {props.cantidad}</p>
          </div>
        )}
      </div>
      <div className="DivBoton">
        {isEditing ? (
          <div>
            <button onClick={handleSaveEdit}>Guardar</button>
            <button onClick={handleCancelEdit}>Cancelar</button>
          </div>
        ) : (
          <div>
            <button onClick={handleEdit}>Editar</button>
            <button onClick={handleDelete}>Eliminar</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
