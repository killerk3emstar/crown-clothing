import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeProductCart = (cartItems, productToRemove) => {
  const newCartItems = cartItems.filter(
    (cartItem) => cartItem.id !== productToRemove.id
  );
  return newCartItems;
};

const decreseProductCart = (cartItems, productToDecrese) => {
  return cartItems.map((cartItem) =>
    cartItem.id === productToDecrese.id
      ? { ...productToDecrese, quantity: productToDecrese.quantity - 1 }
      : cartItem
  );
};

export const CartContext = createContext({
  isCartOpen: null,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  decreseItemQuantityInCart: () => {},
  removeProductFromCart: () => {},
  clearCart: () => {},
  cartCount: null,
  totalCost: null,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (count, cartItem) => count + cartItem.quantity,
      0
    );

    setCartCount(newCartCount);
  }, [cartItems]);
  useEffect(() => {
    const newTotalCost = cartItems.reduce(
      (cost, cartItem) => cost + cartItem.quantity * cartItem.price,
      0
    );

    setTotalCost(newTotalCost);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const decreseItemQuantityInCart = (productToDecrese) => {
    console.log(productToDecrese);
    setCartItems(
      productToDecrese.quantity === 1
        ? removeProductCart(cartItems, productToDecrese)
        : decreseProductCart(cartItems, productToDecrese)
    );
  };

  const removeProductFromCart = (productToRemove) => {
    console.log(productToRemove);
    setCartItems(removeProductCart(cartItems, productToRemove));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    decreseItemQuantityInCart,
    removeProductFromCart,
    clearCart,
    cartCount,
    totalCost,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
