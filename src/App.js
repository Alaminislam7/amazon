import React, { useEffect } from 'react';
import Header from './Header/Header';
import Home from './Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout/Checkout';
import Login from './Login/Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment/Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders/Orders';

const promise = loadStripe(
  "pk_test_51H7zikLtZsH7JCNOJYjBv1GSPSK4r8BCSZ8zb8o6PYi40YyDwAU7OrmL76JVURNsgTbFFUQZfSYIR35nznOIHmVq00ddc6TZNt"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect( () => {
    auth.onAuthStateChanged(authUser => {
      console.log(authUser);

      if(authUser) {
        //the user just logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment/> 
            </Elements>
          </Route>
          <Route path='/orders'>
            <Orders/>
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
