import CheckoutItem from "./CheckoutItem";
import itemData from "../itemData";
import { useState, useEffect } from "react";

const Checkout = ({ clickCart, cartItems, clearCart }) => {
  const [total, setTotal] = useState(0);
  const prices = [];

  useEffect(() => {
    const newTotal = prices.reduce((a, b) => a + b, 0);
    setTotal(newTotal);
  }, [clickCart]);

  return (
    <div className="checkout">
      <div className="checkout-header">
        <h2>Checkout</h2>
        <button onClick={clickCart}>
          <i class="fas fa-window-close fa-2x"></i>
        </button>
      </div>
      <div className="checkout-columns">
        <p>Item</p>
        <p>Price</p>
      </div>
      <div className="checkout-rows">
        {itemData.map((item) => {
          if (cartItems.includes(item.key)) {
            prices.push(item.price);
            return <CheckoutItem title={item.title} price={item.price} />;
          }
        })}
      </div>
      <div className="checkout-total">
        <p>Total:</p>
        <p>€{total}</p>
      </div>
      <div className="checkout-clear">
        <button onClick={clearCart}>CLEAR</button>
      </div>
    </div>
  );
};
export default Checkout;
