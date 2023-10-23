import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Nav.module.css';
import { EcommerceContext } from '../../Context/EcommerceContext';

function Nav() {
  const Navigate = useNavigate();
  const { allCarrito } = useContext(EcommerceContext);

  const totalCarrito = allCarrito.reduce((total, producto) => total + producto.cantidad, 0);

  return (
    <div className={style.DivNav}>
      <div className={style.DivLogo}>
        <a onClick={() => Navigate('/')}>Tienda</a>
      </div>
      <div className={style.DivOpciones}>
        <div>
          <a onClick={() => Navigate('/admin')}>admin</a>
        </div>
        <div>
          <a onClick={() => Navigate('/Carrito')}>
            Carrito{' '}
            {totalCarrito > 0 && (
              <span className={style.Circulo}>{totalCarrito}</span>
            )}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
