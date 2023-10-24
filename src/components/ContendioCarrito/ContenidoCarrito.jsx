import React, { useContext, useState } from 'react';
import { EcommerceContext } from '../../Context/EcommerceContext';
import './ContenidoCarrito.css';

function ContenidoCarrito() {
  const { allCarrito, removeProductFromCarrito, setAllProducts } = useContext(EcommerceContext);

  const [editedProduct, setEditedProduct] = useState(null);

  const handlePrintCarrito = () => {
    console.log(allCarrito);
  };

  const handleRemoveFromCarrito = (id) => {
    removeProductFromCarrito(id);

    // No actualices la lista de productos en la tienda aquí
  };

  const handleEditCantidad = (id, newCantidad) => {
    if (newCantidad >= 1) {
      // Actualiza la cantidad en el carrito
      const updatedCarrito = allCarrito.map((producto) => {
        if (producto.id === id) {
          return { ...producto, cantidad: newCantidad };
        }
        return producto;
      });
      setAllProducts(updatedCarrito);

      // Limpia la edición una vez que se ha guardado
      setEditedProduct(null);
    }
  };

  return (
    <div className="DivContenidoCarrito">
      <h1>Carrito de Compras</h1>
      {allCarrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul className="ListaCarrito">
          {allCarrito.map((producto) => (
            <li key={producto.id} className="ItemCarrito">
              <img src={producto.urlImagen} alt={producto.nombre} className="ImagenCarrito" />
              <div className="InfoProducto">
                <p>{producto.nombre}</p>
                <p>ID: {producto.id}</p>
                <p>Precio: ${producto.precio}C/U</p>
                <p>
                  Cantidad: {editedProduct && editedProduct.id === producto.id ? (
                    <input
                      type="number"
                      value={editedProduct.cantidad}
                      onChange={(e) => {
                        const newCantidad = parseInt(e.target.value, 10);
                        setEditedProduct({ ...editedProduct, cantidad: newCantidad });
                      }}
                    />
                  ) : (
                    <span>{producto.cantidad}</span>
                  )}
                </p>
                <button onClick={() => handleRemoveFromCarrito(producto.id)} className="BotonEliminar">Eliminar</button>
                <button onClick={() => setEditedProduct(producto)} className="BotonEditar">
                  Editar
                </button>
                {editedProduct && editedProduct.id === producto.id && (
                  <button onClick={() => handleEditCantidad(producto.id, editedProduct.cantidad)} className="BotonGuardar">
                    Guardar
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ContenidoCarrito;
