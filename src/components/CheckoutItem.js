const CheckoutItem = ({ title, price }) => {
  return (
    <div className="checkout-item">
      <p>{title}</p>
      <p>€{price}</p>
    </div>
  );
};
export default CheckoutItem;
