const Item = (props) => {
  const { id, title, price, image, handleClick } = props;
  return (
    <div className="item">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <div className="item-interact">
        <p>Price: €{price}</p>
        <button className={id} onClick={handleClick}>
          ADD TO CART
        </button>
      </div>
    </div>
  );
};
export default Item;
