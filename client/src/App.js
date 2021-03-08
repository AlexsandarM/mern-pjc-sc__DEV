import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Components
import Header from './components/layout/header/Header';
import Home from './components/pages/Home';
import Account from './components/pages/Account';
import Register from './components/user/Register';
import Login from './components/user/Login';
import Products from './components/products/Products';

import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import ProductState from './context/product/ProductState';
import PrivateRoute from './components/routing/PrivateRoute';

import setAuthToken from './utils/setAuthToken';
import ShoppingCart from './components/shopping-cart/ShoppingCart';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <AuthState>
      <ProductState>
        <AlertState>
          <Router>
            <Fragment>
              <Header />

              <Switch>
                <Route exact path='/' component={Home} />
                <PrivateRoute exact path='/account' component={Account} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/desktop' component={Products} />
                <Route exact path='/laptop' component={Products} />
                <Route exact path='/cart' component={ShoppingCart} />
              </Switch>
            </Fragment>
          </Router>
        </AlertState>
      </ProductState>
    </AuthState>
  );
}

export default App;
