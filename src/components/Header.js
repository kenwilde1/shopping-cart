import { useHistory } from "react-router-dom";

const Header = (props) => {
  const { cartLength, clickCart } = props;

  const history = useHistory();

  const routeChangeHome = () => {
    let path = `/`;
    history.push(path);
  };

  const routeChangeShop = () => {
    let path = `/shop`;
    history.push(path);
  };

  return (
    <div className="header">
      <div className="header-content">
        <div className="title">
          <h1>Sneeker Tweeker</h1>
        </div>
        <div className="pages">
          <button onClick={routeChangeHome}>HOME</button>
          <button onClick={routeChangeShop}>SHOP</button>
        </div>
        <div className="cart">
          <button className="cart-button" onClick={clickCart}>
            <i className="fas fa-shopping-cart fa-2x"></i>
          </button>
          <span>{cartLength ? cartLength : 0} item(s)</span>
        </div>
      </div>
      <div className="header-style">
        <div className="red"></div>
        <div className="yellow"></div>
        <div className="blue"></div>
        <div className="lime"></div>
        <div className="pink"></div>
      </div>
    </div>
  );
};

export default Header;
