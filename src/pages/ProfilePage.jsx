import React from "react";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import HeaderImg from "../images/moviebackground.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProfilePage = ({ onLogin, onSignUp }) => {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const toggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };
  const handleLogin = () => {
    onLogin(username, password);
  };

  const handleSignUp = () => {
    onSignUp(username, password);
  };

  return (
    <div className="app__container">
      <Sidebar />
      <div className="app__container__right login__container">
        {showLoginForm ? (
          <div className="form-container">
            <h2>Login</h2>
            <form>
              <input
                className="input__profile"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className="input__profile"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
    
              <button
                type="button"
                onClick={handleLogin}
                className="login__button"
              >
                Login
              </button>
            </form>
            <button onClick={toggleForm} className="login__button">
              Switch to Sign Up
            </button>
          </div>
        ) : (
          <div className="form-container">
            <h2>Sign Up</h2>
            <form>
              <input
                className="input__profile"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className="input__profile"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={handleSignUp}
                className="login__button"
              >
                Sign Up
              </button>
            </form>
            <button onClick={toggleForm} className="login__button">
              Switch to Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
