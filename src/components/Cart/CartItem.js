import React from "react";

const CartItem = ({
  name,
  price,
  currency,
  onClick,
  image,
  id,
  removeItem,
  quantity
}) => {
  
  return (
    <div className="cart-item">
      <div>
        <img
          src={image}
          alt="product"
          style={{ height: "200px", width: "200px" }}
        />
        <br />

        <button
          className="btn btn-danger btn-xs"
          onClick={() => removeItem(id)}
          style={{ marginRight: "10px" }}
        >
          X
        </button>
        <b>
          <span className="cart-item__name">{name}</span><br/>
          <span className="cart-item__quantity">Quantity: {quantity?quantity:1}</span>
        </b>
      </div>
      <b>
        <div className="cart-item__price" style={{ marginLeft: "30px" }}>
          {price} {currency}
        </div>
      </b>
    </div>
  );
};

export default CartItem;
