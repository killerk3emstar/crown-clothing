import "./checkout.styles.scss";

import { useContext } from "react";
import Button from "../../components/button/button.component";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../contexts/cart.context";

const Checkout = () => {
  const {
    cartItems,
    decreseItemQuantityInCart,
    removeProductFromCart,
    addItemToCart,
    clearCart,
    totalCost,
  } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Name</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem
          key={cartItem.id}
          cartItem={cartItem}
          decreseItemQuantityInCart={decreseItemQuantityInCart}
          removeProductFromCart={removeProductFromCart}
          addItemToCart={addItemToCart}
        />
      ))}
      <span className="total">{`total cost: $${totalCost}`}</span>
      <Button onClick={clearCart}>clear cart</Button>
    </div>
  );
};

export default Checkout;
