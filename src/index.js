//Import React and React-Dom
import React from "react";
import ReactDOM from "react-dom";

//IMPORT BROWSERROUTER FUNCTIONALITY
import { BrowserRouter, Route, Switch } from "react-router-dom";

//IMPORT CSS FILE HERE

//IMPORT COMPONENTS HERE
import App from "./components/App";
import Admin from "./components/Admin.js";
import ProductList from "./components/ProductList.js";
import BaseLayout from "./components/base_layout.js";
import CartPage from "./components/cart/CartPage.js";

//IMPORT REGISTERED SERVICE WORKER
import registerServiceWorker from "./components/registerServiceWorker";


//ROUTES
ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path="/ProductList" component={ProductList} />
        <Route path="/Cart" component={CartPage} />
        <Route path="/Admin" component={Admin} />
        <Route path="/" component={App} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
