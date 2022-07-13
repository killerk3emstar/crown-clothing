import "./checkout-item.styles.scss";
const CheckoutItem = ({
  cartItem,
  addItemToCart,
  decreseItemQuantityInCart,
  removeProductFromCart,
}) => {
  const { name, price, imageUrl, quantity } = cartItem;

  const removeProductFromCartHandler = () => {
    removeProductFromCart(cartItem);
  };
  const drdecreseItemQuantityInCartHandler = () => {
    decreseItemQuantityInCart(cartItem);
  };
  const addItemToCartHandler = () => {
    addItemToCart(cartItem);
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={drdecreseItemQuantityInCartHandler}>
          &#10094;
        </div>
        {quantity}
        <div className="arrow" onClick={addItemToCartHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={removeProductFromCartHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
