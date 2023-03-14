import React, { useState } from "react";
// import Cart from "./containers/Cart";
import { productsData } from "./data/products";
// import ProductList from './containers/ProductList';
import ProductsList from "./components/Product";
import Cart from "./components/Cart";
import useMediaQuery from "use-mediaquery";

const App = () => {
  const isTablet = useMediaQuery("(max-width: 768px)");

  let [cartItems, setCartItems] = useState([]);

  const productContainerStyles = {
    display: "grid",
    gridTemplateColumns: isTablet ? "repeat(2,1fr)" : "repeat(3,1fr)",
    columnGap: "30px",
  };

  const addItemInCart = (itemToAdd) => {
    // if no item in the cart simply push the item we got
    if (cartItems.length === 0) {
      setCartItems([{ ...itemToAdd, quantity: 1 }]);
      return;
    }

    // if items exist then loop through the cart in case of same item increase its quantity in case of different item push the item to the cartItems array
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === itemToAdd.id) {
        cartItems[i]["quantity"] = cartItems[i]["quantity"] + 1;
        break;
      }
      if (i === cartItems.length - 1) {
        cartItems.push({ ...itemToAdd, quantity: 1 });
        break;
      }
    }

    // set the items to update the state

    setCartItems([...cartItems]);
  };

  const removeItemFromCart = (itemId) => {
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === itemId) {
        // if items quantity is greater than 1 then decrease the quantity else if quantity is 1 simply remove the item
        if (cartItems[i]["quantity"] > 1) {
          cartItems[i]["quantity"] = cartItems[i]["quantity"] - 1;
          break;
        } else {
          cartItems = cartItems.filter((item) => item.id !== itemId);
          break;
        }
      }
    }

    // set the items to update the state

    setCartItems([...cartItems]);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>React Assessment</h1>
        </div>
      </div>
      <div className="row">
        <div style={{ ...productContainerStyles }} className="col-md-8">
          {productsData.map((product) => (
            <ProductsList
              addCartItem={addItemInCart}
              product={product}
              key={product.id}
            />
          ))}
        </div>
        <div className="col-md-4">
          <Cart items={cartItems} removeItemFromCart={removeItemFromCart} />
        </div>
      </div>
    </div>
  );
};

export default App;
