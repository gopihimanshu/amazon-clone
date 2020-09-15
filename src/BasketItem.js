import React from "react";
import "./BasketItem.css";
import { useStateValue } from "./StateProvider";

function BasketItem() {
  const [{ basket }, dispatch] = useStateValue();
  let basketItem;
  basket.map((item) => (basketItem = item));
  let { title, price, rating } = basketItem;
  return (
    <div className="basket">
      <p>{title}</p>
      <p className="basket_price">
        <small>$</small>
        <strong>{price}</strong>
      </p>
      <div className="basket__rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>⭐</p>
          ))}
      </div>
      <div className="basket__score"></div>
    </div>
  );
}

export default BasketItem;
