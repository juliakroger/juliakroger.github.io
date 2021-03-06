import React, { Component } from 'react';
import Layout from './containers/Layout';
import BurgerBuilder from './containers/BurgerBuilder';
import CheckOut from './containers/Checkout';
import PastOrders from './containers/PastOrders';
import Auth from './containers/Auth';
import {BrowserRouter,Switch,Route } from "react-router-dom";


class App extends Component {
  render() {
     return (
      <BrowserRouter>
          <Layout>
              <Switch>
                  <Route path="/checkout" component={CheckOut}/>
                  <Route path="/orders" component={PastOrders} />
                  <Route path="/buildburger" component={BurgerBuilder}/>
                  <Route path="/" component={Auth}/>
              </Switch>
          </Layout>
      </BrowserRouter>
     );
  };
}

export default App;
