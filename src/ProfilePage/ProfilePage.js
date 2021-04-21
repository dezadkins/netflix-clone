import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import Nav from "../Nav/Nav";
import "./ProfilePage.css";

function ProfilePage() {
  const user = useSelector(selectUser);
  return (
    <div className="profile">
      <h2>This the Profile Page</h2>
      <Nav />
      <div className="profile__body">
        <h1>Edit Profile</h1>
        <div className="profile__info">
          <img
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt=""
          />
          <div className="profile__details">
            <h2>{user.email}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
