import React, { useRef } from "react";

import { auth } from "../firebase";
import "./SignIn.css";

function SignIn() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <>
      <div className="signIn">
        <form action="">
          <h1>Sign In</h1>
          <input type="email" placeholder="Email" ref={emailRef} />
          <input type="password" placeholder="Password" ref={passwordRef} />
          <button type="submit" onClick={signIn}>
            Sign In
          </button>
          <h4>
            <span className="signIn__gray">New to Dezflix? </span>

            <span className="signIn__link" onClick={register}>
              <a href="">Sign Up now.</a>
            </span>
          </h4>
        </form>
      </div>
    </>
  );
}

export default SignIn;
