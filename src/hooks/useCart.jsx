import { useEffect, useState } from 'react';

export default function useCart() {
  const storageValue = localStorage.getItem('cart');
  const [cart, setCart] = useState(storageValue ? JSON.parse(storageValue) : []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  function addItem(id, quantity = 1) {
    if (cart.some((item) => item.id === id)) {
      setCart((s) =>
        s.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: quantity + item.quantity };
          } else {
            return item;
          }
        })
      );
    } else {
      setCart((s) => [...s, { id: id, quantity: quantity }]);
    }
  }

  function increaseQuantity(id, quantity = 1) {
    if (cart.some((item) => item.id === id)) {
      setCart((s) =>
        s.map((i) => {
          if (i.id === id) {
            return { ...i, quantity: i.quantity + quantity };
          } else {
            return i;
          }
        })
      );
    }
  }

  function decreaseQuantity(id, quantity = 1) {
    if (cart.some((item) => item.id === id)) {
      setCart((s) =>
        s.map((i) => {
          if (i.id === id) {
            return { ...i, quantity: i.quantity - quantity };
          } else {
            return i;
          }
        })
      );
    }
  }

  function removeItem(id) {
    setCart((s) => s.filter((item) => item.id !== id));
  }

  function emptyCart() {
    setCart([]);
  }

  return { cart, addItem, increaseQuantity, decreaseQuantity, removeItem, emptyCart };
}
