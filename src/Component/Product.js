import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ price, title, id, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log("this is the basket", basket);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_Basket",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating ">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <div className="Product_image">
        <img src={image} />
      </div>
      <button onClick={addToBasket}> ADD_TO_BASKET</button>
    </div>
  );
}

export default Product;
