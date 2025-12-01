import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);


  const addToCart = (pizza) => {
    setCart(prev => {

      const existe = prev.find(p => p.id === pizza.id);

      //nota: si ya esta en el carrito "aumentar cantidad"

      if (existe) {
        return prev.map(p =>
          p.id === pizza.id
            ? { ...p, cantidad: p.cantidad + 1 }
            : p
        );
      }

      //nota:  si NO esta, agregarla con cantidad 1

      return [...prev, { ...pizza, cantidad: 1 }];
    });
  };

 


  const removeFromCart = (id) => {
    setCart(prev =>
      prev
        .map(p =>
          p.id === id
            ? { ...p, cantidad: p.cantidad - 1 }
            : p
        )
        .filter(p => p.cantidad > 0)
    );
  };

 
  
  const getTotal = () =>
    cart.reduce((acc, p) => acc + p.price * p.cantidad, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, getTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};
