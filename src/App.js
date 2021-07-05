import './App.css';
import Header from './components/Header';
import Home from './components/Home'
import Checkout from './components/Checkout';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useStateValue } from './components/StateProvider';
import React, { useEffect} from 'react';
import { auth } from './Firebase'

function App() {

  //get currennt state of basket from data layer
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user is logged in
        dispatch ({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //user is logged out
        dispatch ({
          type: 'SET_USER',
          user: null
        })
      }
    });

    return () => {
      // cleanup
      unsubscribe();
    }
  }, [dispatch])

  console.log(user)

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path = "/">
            <Header />
            <Home />
          </Route>
          <Route path = "/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path = "/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
