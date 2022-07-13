import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addItemToCartHandler = () => {
    addItemToCart(product);
  };

  return (
    <div className="product-card-container">
      <img alt={`$name`} src={imageUrl} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
        <Button buttonType="inverted" onClick={addItemToCartHandler}>
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
