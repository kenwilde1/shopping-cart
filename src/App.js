import "./App.css";
import Header from "./components/Header";
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();

  const routeChange = () => {
    let path = `/shop`;
    history.push(path);
  };

  return (
    <div className="App">
      <Header />
      <div className="home-content">
        <div className="landing-info">
          <h2>SNEEKER TWEEKER</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
          <button onClick={routeChange}>
            <h3>Shop Now →</h3>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
