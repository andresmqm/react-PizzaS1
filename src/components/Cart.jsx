import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { LogoutContext } from '../contexts/LogoutContext';
import { UserContext } from '../contexts/UserContext';

export default function Cart() {

  const { cart, addToCart, removeFromCart, getTotal } = useContext(CartContext);

 const { token } = useContext(UserContext);
 const [success, setSuccess] = useState(false);

  

  const aumentarcant = (pizza) => {
    addToCart(pizza);
  };

  const restarCant = (id) => {
    removeFromCart(id);
  };

  const total = getTotal();

  const checkout = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart }),
      });

      if (!res.ok) throw new Error();

       setSuccess(true);
       
    } catch {
      alert("Error al procesar la compra");
    }
  };


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
                style={{ borderRadius: "10px", objectFit: "cover" }}
              />

              <div className="ms-3">
                <h5 className="mb-1">{pizzas.name}</h5>
                <p className="mb-0">${pizzas.price.toLocaleString("es-CL")}</p>
              </div>
            </div>

            <div className="d-flex align-items-center">
              <button
                className="btn btn-outline-secondary mx-2"
                onClick={() => restarCant(pizzas.id)}> - </button>

              <span>{pizzas.cantidad}</span>

              <button
                className="btn btn-outline-secondary mx-2"
                onClick={() => aumentarcant(pizzas)}> + </button>
            </div>

          </div>
        ))
      )}

      <hr />

      <h3>Total: ${total.toLocaleString("es-CL")}</h3>

      {success && (
        <div className="alert alert-success mt-3">Compra realizada con éxito</div>
      )}



      {/* El boton de pagar se deshabilita si no hay token */}
      
      <button className="btn btn-dark mt-2" 
      disabled={!token}
      onClick={checkout} >Pagar</button>
    </div>
  );
}


  

