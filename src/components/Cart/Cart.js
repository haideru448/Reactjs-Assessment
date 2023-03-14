import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import "./Cart.css";

const Cart = ({ items, total, removeItemFromCart }) => {
  const [itemsAmount, setItemsAmount] = useState(0);

  useEffect(() => {
    var countedTotal = 0;
    items.forEach((item) => (countedTotal += item.price*item.quantity));

    setItemsAmount(countedTotal);
  }, [items]);


  return (
    <div>
      <h3>Shopping Cart</h3>

      <div className="cart">
        <div className="panel panel-default">
          <div className="panel-body">
            {items.length > 0 && (
              <div className="cart__body">
                {items.map((item) => (
                  <CartItem
                    key={item.id}
                    {...item}
                    removeItem={removeItemFromCart}
                  />
                ))}
              </div>
            )}
            {items.length === 0 && (
              <div className="alert alert-info">Cart is empty</div>
            )}
            {/* show total upto two decimals */}
            <div className="cart__total">Total: {itemsAmount.toFixed(2)} USD</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
