import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import Login from "./../components/Login";
import Signup from "./../components/Signup";

function ZomatoApp() {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const openSignupModal = () => {
    setSignupModalOpen(true);
  };

  const closeSignupModal = () => {
    setSignupModalOpen(false);
  };

  const [contactOption, setContactOption] = useState("email");
  const [email, setEmail] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState("");
  const [phone, setPhone] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleContactOptionChange = (e) => {
    setContactOption(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCountryCodeChange = (e) => {
    setSelectedCountryCode(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (contactOption === "email") {
      if (!email || !validateEmail(email)) {
        setErrorMessage("Please enter a valid email address.");
        setSuccessMessage("");
        return;
      }
    } else if (contactOption === "phone") {
      if (!selectedCountryCode || !phone) {
        setErrorMessage("Please enter both the country code and phone number.");
        setSuccessMessage("");
        return;
      }
    }

    const dataToSend = {
      contactOption,
      email,
      selectedCountryCode,
      phone,
    };

    console.log(dataToSend);

    fetch("http://localhost:8000/api/endpoint/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": getCookie("csrftoken"),
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Verilənlər uğurla göndərildi.");
        setSuccessMessage("Verilənlər uğurla göndərildi.");
        setErrorMessage("");
      })
      .catch((error) => {
        console.error("Verilənlər göndərilərkən bir xəta oldu:", error);
        setErrorMessage("Verilənlər göndərilərkən bir xəta oldu.");
        setSuccessMessage("");
      });

    function getCookie(name) {
      let cookieValue = null;
      if (document.cookie && document.cookie !== "") {
        const cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          if (cookie.substring(0, name.length + 1) === name + "=") {
            cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
            break;
          }
        }
      }
      return cookieValue;
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const countryCodes = [
    { code: "90", country: "TR" },
    { code: "97", country: "US" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Contact Option:", contactOption);
    console.log("Email:", email);
    console.log("Phone:", phone);
  };

  useEffect(() => {
    fetch("countryCodes.json")
      .then((response) => response.json())
      .then((data) => {
        setCountryCodes(data);
      })
      .catch((error) => {
        console.error("Error fetching country codes:", error);
      });
  }, []);

  return (
    <>
      <navbar className="header-app">
        <div className="container-ay">
          <div className="navigation-home">
            <div className="delivery-img">
              <Link to={`/`}>
                <img
                  src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                  alt=""
                />
              </Link>
            </div>

            <div className="navbar-app-div">
              <a>Logout</a>
            </div>
          </div>
        </div>
      </navbar>
      <Modal isOpen={loginModalOpen} onRequestClose={closeLoginModal}>
        <Login onClose={closeLoginModal} />
      </Modal>
      <Modal isOpen={signupModalOpen} onRequestClose={closeSignupModal}>
        <Signup onClose={closeSignupModal} />
      </Modal>

      <section className="app-sec page-app-sec">
        <div className="zomato-app container-ay">
          <div className="app-image">
            <img
              src="https://b.zmtcdn.com/data/o2_assets/f773629053b24263e69f601925790f301680693809.png"
              alt=""
            />
          </div>
          <div className="zomato-app-text">
            <h1>Get the Zomato app</h1>
            <p>
              We will send you a link, open it on your phone to download the app
            </p>
            <div className="radio-option">
              <form onSubmit={handleSubmitForm}>
                <div className="select-options">
                  <div>
                    <input
                      type="radio"
                      id="emailOption"
                      name="contactOption"
                      value="email"
                      checked={contactOption === "email"}
                      onChange={handleContactOptionChange}
                    />
                    <label htmlFor="emailOption">Email</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="phoneOption"
                      name="contactOption"
                      value="phone"
                      checked={contactOption === "phone"}
                      onChange={handleContactOptionChange}
                    />
                    <label htmlFor="phoneOption">Phone</label>
                  </div>
                </div>
                {contactOption === "email" && (
                  <div className="input-submit">
                    <input
                      type="email"
                      id="emailInput"
                      value={email}
                      onChange={handleEmailChange}
                      placeholder="Email"
                    />
                    <button type="submit">Share App Link</button>
                  </div>
                )}
                {contactOption === "phone" && (
                  <div className="input-submit">
                    <div>
                      <select
                        id="countryCode"
                        value={selectedCountryCode}
                        onChange={handleCountryCodeChange}
                      >
                        {countryCodes.map((country) => (
                          <option key={country.code} value={country.code}>
                            {country.code}
                          </option>
                        ))}
                      </select>
                      <p>|</p>
                      <input
                        type="tel"
                        id="phoneInput"
                        value={phone}
                        onChange={handlePhoneChange}
                        placeholder="bura yazın..."
                      />
                    </div>
                    <button type="submit">Share App Link</button>
                  </div>
                )}
              </form>
              {successMessage && (
                <div className="success">{successMessage}</div>
              )}
              {errorMessage && <div className="error">{errorMessage}</div>}
            </div>
            <div className="appfromdiv">
              <p>Download app from</p>
              <div className="appfrom">
                <img
                  src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
                  alt=""
                />
                <img
                  src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ZomatoApp;
