import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./HomeScreen/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login/Login";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser, signin } from "./features/userSlice";

function App() {
  const user = null;
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const getOut = auth.onAuthStateChanged((userAuth) => {
  //     if (userAuth) {
  //       //Logged In
  //       dispatch(
  //         signin({
  //           uid: userAuth.uid,
  //           email: userAuth.email,
  //         })
  //       );
  //     } else {
  //       //Loggged Out
  //       dispatch(logout);
  //     }
  //   });

  //   return getOut; //performance not effected with this.
  // }, []);

  return (
    <div className="app">
      <Router>
        {/* {!user ? (
          <Login /> */}
        // ) : (
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
        </Switch>
        {/* )} */}
      </Router>
    </div>
  );
}

export default App;
