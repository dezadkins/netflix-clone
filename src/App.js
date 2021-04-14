import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./HomeScreen/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login/Login";
import { auth } from "./firebase";

useEffect(() => {
  const getOut = auth.onAuthStateChanged((userAuth) => {
    if (userAuth) {
      //Logged In
    } else {
      //Loggged Out
    }
  });

  return getOut; //performance not effected with this.
}, []);

function App() {
  const user = null;
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Switch>
            <Route path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
