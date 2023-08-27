import React, { useState } from "react";

const Signup = ({ onClose, onLoginClick }) => {
  const [username, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== passwordConfirm) {
      console.error("Passwords do not match");
      return;
    }

    const registrationData = {
      username: username,
      email: email,
      full_name: fullName,
      password: password,
      re_password: passwordConfirm,
    };

    try {
      const response = await fetch("http://localhost:8000/api/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registrationData),
      });

      if (response.ok) {
        setRegistrationSuccess(true);
      } else {
        console.error("Registration error:", response.statusText);
        setRegistrationSuccess(false);
      }
    } catch (error) {
      console.error("Registration error:", error);
      setRegistrationSuccess(false);
    }
  };

  const handleClose = () => {
    onClose();
  };

  const handleLoginClick = () => {
    onClose();
    onLoginClick();
  };

  return (
    <div className="login-wrapper">
      <div className="login-input">
        {registrationSuccess ? (
          <div className="registration-success">
            <h2 className="h4 regis-succ">Email Confirmation.</h2>
            <p className="p">
              Thank you for signing up with Organick! We hope you'll enjoy your
              shopping with us.<br></br>Check your email, please. We've sent a
              message.
            </p>
          </div>
        ) : (
          <form method="post" onSubmit={handleSubmit}>
            <div className="login-input-head">
              <div className="org">Registration</div>
              <div className="login-input-head-title">
                <p onClick={handleClose}>
                  <span>Welcome</span> Back
                </p>
                <p className="p login_p">
                  Sign up with your email address and password
                </p>
              </div>
            </div>

            <div className="login-input-title">
              <div className="registr_username">
                <label htmlFor="username">Enter your username</label>
                <input
                  onChange={(e) => setUserName(e.target.value)}
                  id="username"
                  name="username"
                  value={username}
                  type="text"
                  placeholder="Enter your username..."
                />
              </div>
              <div className="registr_name">
                <label htmlFor="name">Enter your name</label>
                <input
                  onChange={(e) => setFullName(e.target.value)}
                  id="name"
                  name="name"
                  value={fullName}
                  type="text"
                  placeholder="Enter your name..."
                />
              </div>
              <div className="registr_email">
                <label htmlFor="email">Enter your email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  name="email"
                  value={email}
                  type="email"
                  placeholder="Enter your email..."
                />
              </div>

              <div>
                <label htmlFor="password">Create your password</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  name="password"
                  value={password}
                  type="password"
                  placeholder="Create your password..."
                />
              </div>

              <div>
                <label htmlFor="passwordConfirm">Confirm your password</label>
                <input
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  id="passwordConfirm"
                  name="passwordConfirm"
                  value={passwordConfirm}
                  type="password"
                  placeholder="Confirm Password"
                />
              </div>

              <div className="login-button">
                <button type="submit">Sign Up</button>
              </div>
            </div>
          </form>
        )}
      </div>
      {/* <div className="login-img">
        <div onClick={handleSignUpExit}>
          <CiCircleRemove />
        </div>
      </div> */}
      {/* Rest of the component */}
    </div>
  );
};

export default Signup;
