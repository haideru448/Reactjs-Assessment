import React from "react";

const Product = ({ product, addCartItem }) => {
  return (
    <div className="product thumbnail">
      <img src={product.image} alt="product" />
      <div className="caption">
        <h3>{product.name}</h3>
        <div className="product__price">
          {product.price} {product.currency}
        </div>
        <div className="product__button-wrap">
          <button
            className="btn btn-primary"
            onClick={() => addCartItem(product)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
