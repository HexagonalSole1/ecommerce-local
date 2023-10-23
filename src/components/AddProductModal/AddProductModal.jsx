import React, { useState, useContext } from 'react';
import Modal from 'react-modal';
import './addProductModal.css'; // Importa los estilos
import { EcommerceContext } from '../../Context/EcommerceContext'; // Importa el contexto

const customStyles = {
  // Estilos del modal
};

function AddProductModal({ isOpen, onRequestClose }) {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const { addProduct } = useContext(EcommerceContext); // Obtén la función addProduct del contexto

  const handleSubmit = (e) => {
    e.preventDefault();

    // Llama a la función addProduct con los datos del producto
    addProduct(
      Date.now(), // Puedes usar un identificador único, por ejemplo, la marca de tiempo
      productName,
      parseFloat(productPrice), // Convierte el precio a número
      '',
      0 // Cantidad inicial
    );

    // Cierra el modal
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Agregar Producto"
    >
      <h2 style={{ textAlign: 'center' }}>Agregar Producto</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre del producto:
          <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
        </label>
        <label>Precio del producto:
          <input type="number" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
        </label>
        <div style={{ textAlign: 'center' }}>
          <button type="submit" className="submit-button">Agregar</button>
        </div>
      </form>
    </Modal>
  );
}

export default AddProductModal;
