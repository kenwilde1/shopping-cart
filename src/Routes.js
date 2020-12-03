import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Shop from "./components/Shop";
import Checkout from "./components/Checkout";

const Router = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + "/"} component={App} />
        <Route exact path={process.env.PUBLIC_URL + "/shop"} component={Shop} />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
