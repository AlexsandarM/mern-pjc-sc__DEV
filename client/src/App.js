import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';

// Components
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import Home from './components/pages/Home';
import Register from './components/user/Register';
import Login from './components/user/Login';
import Products from './components/products/Products';
import AlertTemplate from 'react-alert-template-mui';

import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import ProductState from './context/product/ProductState';

import setAuthToken from './utils/setAuthToken';
import ShoppingCart from './components/shopping-cart/ShoppingCart';
import Support from './components/pages/Support';
import Alerts from './components/layout/Alerts';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

// REACT ALERT
// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

function App() {
  return (
    <AuthState>
      <ProductState>
        <AlertProvider template={AlertTemplate} {...options}>
          <AlertState>
            <Router>
              <Fragment>
                <Header />
                <Alerts />
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/support' component={Support} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/desktop' component={Products} />
                  <Route exact path='/laptop' component={Products} />
                  <Route exact path='/cart' component={ShoppingCart} />
                </Switch>
                <Footer />
              </Fragment>
            </Router>
          </AlertState>
        </AlertProvider>
      </ProductState>
    </AuthState>
  );
}

export default App;
