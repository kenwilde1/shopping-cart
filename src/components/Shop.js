import { useState, useEffect } from "react";
import Header from "./Header";
import ItemContainer from "./ItemContainer";
import Checkout from "./Checkout";

const Shop = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartLength, setCartLength] = useState(0);
  const [cartClicked, setCartClicked] = useState(false);

  const handleClick = (e) => {
    const item = e.target.className;
    setCartItems((oldArray) => [...oldArray, item]);
  };

  const clickCart = () => {
    cartClicked ? setCartClicked(false) : setCartClicked(true);
  };

  const clearCart = () => {
    setCartLength(0);
    setCartItems([]);
  };

  useEffect(() => {
    setCartLength(cartItems.length);
  }, [cartItems]);

  return (
    <div className="shop">
      <Header cartLength={cartLength} clickCart={clickCart} />
      <ItemContainer handleClick={handleClick} />
      {cartClicked ? (
        <Checkout
          clickCart={clickCart}
          cartItems={cartItems}
          clearCart={clearCart}
        />
      ) : null}
    </div>
  );
};

export default Shop;
