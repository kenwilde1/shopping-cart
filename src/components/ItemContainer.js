import Item from "./Item";
import data from "../itemData";

const ItemContainer = (props) => {
  const { handleClick } = props;

  return (
    <div className="item-container">
      {data.map((item) => (
        <Item
          id={item.key}
          title={item.title}
          price={item.price}
          image={item.image}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};
export default ItemContainer;
