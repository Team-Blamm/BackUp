//Import React and React-Dom
import React from "react";
import ReactDOM from "react-dom";

//IMPORT BROWSERROUTER FUNCTIONALITY
import { BrowserRouter, Route, Switch } from "react-router-dom";

//IMPORT CSS FILE HERE

//IMPORT COMPONENTS HERE
import App from "./components/App";
import Admin from "./components/Admin.js";
import BaseLayout from "./components/base_layout.js";

//IMPORT REGISTERED SERVICE WORKER
import registerServiceWorker from "./components/registerServiceWorker";


//ROUTES
ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path="/Admin" component={Admin} />
        <Route path="/" component={App} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
