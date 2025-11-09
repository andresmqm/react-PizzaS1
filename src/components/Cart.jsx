import React, { useState } from 'react'
import { pizzaCart } from '../../Material de apoyo - Pizzas/pizzas';

export default function Cart() {

    const [cart, setCart] = useState(pizzaCart.map((pizzas) => ({
      ...pizzas, cantidad: pizzas.cantidad || 1, price: Number(pizzas.price), 

    })));

  

  const aumentarcant = (id) => {
    const carroNew = cart.map((pizzas) =>
      pizzas.id === id ? { ...pizzas, cantidad: pizzas.cantidad + 1 } : pizzas
    );
    setCart(carroNew);
  };

  

  const restarCant = (id) => {
    const carroNew = cart.map((pizzas) =>
        pizzas.id === id ? { ...pizzas, cantidad: Math.max(pizzas.cantidad - 1, 0) } : pizzas)
      .filter((pizzas) => pizzas.cantidad > 0);
    setCart(carroNew);};

  
  const total = cart.reduce(

    (acumulador, pizzas) => acumulador + pizzas.price * pizzas.cantidad, 0);



  return (
    
    <div className="container mt-4">
      <h2>Detalles del pedido:</h2>

      {cart.length === 0 ? (<p>Tu carrito está vacío</p>) : (

        cart.map((pizzas) => (

          <div
            key={pizzas.id}
            className="d-flex align-items-center justify-content-between border-bottom py-2">


            <div className="d-flex align-items-center">
              <img
                src={pizzas.img}
                alt={pizzas.name}
                width="120"
                height="80"
                style={{ borderRadius: "10px", objectFit: "cover" }}/>


              <div className="ms-3">
                <h5 className="mb-1">{pizzas.name}</h5>
                <p className="mb-0">${pizzas.price.toLocaleString("es-CL")}</p>
              </div>

            </div>


            <div className="d-flex align-items-center">

              <button
                className="btn btn-outline-secondary mx-2"
                onClick={() => restarCant(pizzas.id)}>  -  </button>


              <span>{pizzas.cantidad}</span>


              <button
                className="btn btn-outline-secondary mx-2"
                onClick={() => aumentarcant(pizzas.id)}>  +   </button>

            </div>

          </div>
        )))}

      <hr />

      <h3>Total: ${total.toLocaleString("es-CL")}</h3>

      <button className="btn btn-dark mt-2">Pagar</button>

    </div>
  );
}


  

