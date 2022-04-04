import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    // Line below is clean up
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    //   only add nav__black class if (render) nav if show variable true
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => history.push("/")}
          className="nav__logo"
          src="https://i.imgur.com/EdyiN6K.png"
          alt="dezflix logo"
        />

        <img
          onClick={() => history.push("/profile")}
          className="nav__avatar"
          src="https://ih0.redbubble.net/image.618410871.2644/flat,1000x1000,075,f.u2.jpg"
          alt="avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
