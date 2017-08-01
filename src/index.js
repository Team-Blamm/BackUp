import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './App';
import SuperHeroes from './';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>


        <Route path="/superheros" component={SuperHeroes} />
        <Route path="/" component={App} />

      </Switch>
    </BaseLayout>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
