import React, { useContext } from 'react';
import Nav from "../components/Nav.jsx/Nav"
import { EcommerceContext } from '../Context/EcommerceContext';
import ContenidoCarrito from '../components/ContendioCarrito/ContenidoCarrito';

function Carrito() {

  return (
    <>

      <Nav />
     <ContenidoCarrito/>
     
    </>
  );


}

export default Carrito;
