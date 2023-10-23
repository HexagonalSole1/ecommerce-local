import React, { useState, useContext } from 'react';
import { EcommerceContext } from '../../Context/EcommerceContext';

import './CardAnadir.css';
import img from '../../img/agregar-contacto.png';

function CardAnadir({ onAddProduct }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addProduct } = useContext(EcommerceContext);

  const [newProduct, setNewProduct] = useState({
    nombre: 'Nuevo Producto',
    precio: 10,
    urlImagen:
      'https://fotografias.larazon.es/clipping/cmsimages01/2023/05/16/EE2C5D7F-6DE5-482E-8C6E-D033104BA3E2/sabias-que-tomate-fruta_95.jpg?crop=8192,4606,x0,y441&width=1028&height=578&optimize=medium&format=webply',
    cantidad: 15,
  });

  const handleAgregarProducto = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoId = Date.now(); // Genera un ID único, puedes usar cualquier método que prefieras
    addProduct(nuevoId, newProduct.nombre, newProduct.precio, newProduct.urlImagen, newProduct.cantidad);
    setIsModalOpen(false);
  };

  return (
    <div className="CardAnadir">
      <button className="buttonAnadir" onClick={handleAgregarProducto}>
        <img src={img} alt="" />
      </button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <form onSubmit={handleSubmit}>
              <label htmlFor="nombre">Nombre:</label>
              <input
                type="text"
                id="nombre"
                value={newProduct.nombre}
                onChange={(e) => setNewProduct({ ...newProduct, nombre: e.target.value })}
              />
              <label htmlFor="precio">Precio:</label>
              <input
                type="number"
                id="precio"
                value={newProduct.precio}
                onChange={(e) => setNewProduct({ ...newProduct, precio: Number(e.target.value) })}
              />
              <label htmlFor="urlImagen">URL de la imagen:</label>
              <input
                type="text"
                id="urlImagen"
                value={newProduct.urlImagen}
                onChange={(e) => setNewProduct({ ...newProduct, urlImagen: e.target.value })}
              />
              <label htmlFor="cantidad">Cantidad:</label>
              <input
                type="number"
                id="cantidad"
                value={newProduct.cantidad}
                onChange={(e) => setNewProduct({ ...newProduct, cantidad: Number(e.target.value) })}
              />
              <button type="submit">Agregar Producto</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardAnadir;
