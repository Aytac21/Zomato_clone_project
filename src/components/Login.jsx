import React from "react";
// import { CiCircleRemove } from "react-icons/ci";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ onClose, onSignupClick }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);
  // const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/api/jwt/create/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (response.ok) {
        // const data = await response.json();
        // const token = data.tokens.access;
        // signIn(token);
        setMessage("Sign-in successful!");
        navigate("/");
        window.location.href = "home/";
      } else {
        setMessage("Invalid username or password");
        setIsSignedIn(false);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred");
      setIsSignedIn(false);
    }
  };

  const handleClose = () => {
    onClose();
  };

  const handleSignupClick = () => {
    onClose();
    onSignupClick();
  };

  return (
    <div className="login-wrapper">
      <div className="login-class"></div>
      <div className="login-input">
        <form method="post" onSubmit={handleSubmit}>
          <div className="login-input-head">
            <div className="org">Login</div>
            <div className="login-input-head-title">
              <p onClick={handleClose}>
                <span>Welcome</span> Back
              </p>
              <p className="p login_p">
                Login in with your email address and password
              </p>
            </div>
          </div>

          <div className="login-input-title">
            <div>
              <label htmlFor="username">Email Address</label>
              <input
                id="username"
                onChange={(e) => setUsername(e.target.value)}
                name="username"
                value={username}
                type="text"
                required
                placeholder="Enter your email..."
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                value={password}
                type="password"
                placeholder="Password"
                required
              />
            </div>

            <div>
              <div className="login-remember">
                <input type="checkbox" name="Remember me" id="" />
                <label htmlFor="">Remember me</label>
              </div>
            </div>

            <div className="login-button">
              <button type="submit">Sign In</button>
            </div>
          </div>
        </form>
        {/* <div className="sign-up" onClick={handleSignUp}>
          <p>Don't have an account?</p>
          <p className="blue-sign">Sign Up</p>
        </div> */}
      </div>
      <div className="login-img">
        {/* <img src={"/static/login.jpg"} alt="" /> */}
        {/* <div onClick={handleSignUpExit}>
          <CiCircleRemove />
        </div> */}
      </div>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
