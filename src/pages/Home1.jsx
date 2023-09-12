import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import i18n from "./i18n";

import Modal from "react-modal";
import Login from "./../components/Login";
import Signup from "./../components/Signup";
import axios from "axios";

function Home1() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

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
        console.log("Data sent successfully.");
        setSuccessMessage("Data sent successfully.");
        setErrorMessage("");
      })
      .catch((error) => {
        console.error("An error occurred while sending data:", error);
        setErrorMessage("An error occurred while sending data:");
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

  const [openDiv, setOpenDiv] = useState(null);

  const handleDivClick = (index) => {
    setOpenDiv((prevOpenDiv) => (prevOpenDiv === index ? null : index));
  };

  const [searchValue, setSearchValue] = useState("");
  const [searchModalDatas, setSearchModalDatas] = useState([]);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const handleChangeSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    if (value) {
      axios
        .get(`http://127.0.0.1:8000/api/search/?q=${value}`)
        .then((response) => {
          setSearchModalDatas(response.data);
          setIsSearchModalOpen(true);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } else {
      setIsSearchModalOpen(false);
    }
  };

  function handlePageTransition() {
    setSearchValue("");
    setIsSearchModalOpen(false);
  }

  const [isSortUp, setIsSortUp] = useState(true);
  const [isInputClicked, setIsInputClicked] = useState(false);

  const toggleSortIcon = () => {
    setIsSortUp((prevIsSortUp) => !prevIsSortUp);
    setIsInputClicked(true);
  };

  const toggleMenu = () => {
    const menuDiv = document.querySelector(".main-nav div");
    menuDiv.classList.toggle("show-menu");
  };

  return (
    <>
      <div className="header-navbar">
        <navbar>
          <div className="header-languange">
            <button onClick={() => changeLanguage("en")}>English</button>
            <button onClick={() => changeLanguage("az")}>Azərbaycan</button>
          </div>
          <div className="container-ay">
            <div className="position">
              <div className="navigation-home">
                <div>
                  <i className="fa-solid fa-mobile-screen-button"></i>
                  <Link to={`/zomatoapp`}>
                    <a href="">{t("app")}</a>
                  </Link>
                </div>
                <nav className="main-nav">
                  <div>
                    <p>
                      <Link to={`/who-we-are/`}>{t("page1")}</Link>
                    </p>

                    <p>
                      <Link to={`/`}>
                        <a>{t("Logout")}</a>
                      </Link>
                    </p>
                  </div>
                  <div className="hamburger-icon" onClick={toggleMenu}>
                    <i className="fa-solid fa-bars"></i>{" "}
                  </div>
                </nav>
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
        <header className="home container-ay">
          <div className="container-ay">
            <div className="homepage">
              <img
                src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
                alt=""
              />
              <h1>{t("zomatodescription")}</h1>
              <div className="searchbox">
                <div className="search-city-delivery">
                  <div>
                    <i className="fa-solid fa-location-dot"></i>
                    <input
                      value={searchValue}
                      onChange={(e) => handleChangeSearch(e)}
                      type="text"
                      placeholder={t("searchplaceholder")}
                    />
                    <i
                      className={`fa-solid ${
                        isSortUp ? "fa-sort-up" : "fa-caret-down"
                      }`}
                      onClick={toggleSortIcon}
                    ></i>
                  </div>

                  {searchModalDatas.length ? (
                    <ul
                      className={`search__modal ${
                        isSearchModalOpen ? "open" : ""
                      }`}
                      style={{
                        maxHeight: "250px",
                        overflowY: "auto",
                      }}
                    >
                      {searchModalDatas.map((a) => (
                        <Link key={a.id} to={`/details/${a.id}`}>
                          <li key={a.id} onClick={handlePageTransition}>
                            <img src={a.restaurant_image} alt="" />
                            {a.name}
                          </li>
                        </Link>
                      ))}
                    </ul>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>

      <main className="container-ay">
        <section className="order-sec">
          <div className="order">
            <Link to={`/delivery`}>
              <div className="order-img">
                <img
                  src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
                  alt=""
                />
              </div>
              <div className="order-p">
                <p>{t("OrderOnline")}</p>
                <p>{t("OrderOnlinedesc")}</p>
              </div>
            </Link>
          </div>
          <div className="order">
            <Link to={`/diningout`}>
              <div className="order-img">
                <img
                  src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
                  alt=""
                />
              </div>
              <div className="order-p">
                <p>{t("Dining")}</p>
                <p>{t("Diningdesc")}</p>
              </div>
            </Link>
          </div>
          <div className="order">
            <Link to={`/nightlife`}>
              <div className="order-img">
                <img
                  src="https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
                  alt=""
                />
              </div>
              <div className="order-p">
                <p>{t("Nightlife")}</p>
                <p>{t("Nightlifedesc")}</p>
              </div>
            </Link>
          </div>
        </section>
        <section className="collection-div">
          <div className="collect-header">
            <h1>{t("Collections")}</h1>
            <div>
              <p>{t("Collectionsdesc")}</p>
            </div>
          </div>
          <div className="collection-blog">
            <div
              className="collect-img"
              style={{
                backgroundImage: ` linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%), url("https://b.zmtcdn.com/data/collections/2deab8e9f06ff125e80f5cc09f11e4d7_1674569132.jpg?output-format=webp")`,
                height: "25rem",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "inline",
              }}
            >
              <Link to="/collection1">
                <div className="collect-img-p">
                  <p>{t("collect1")}</p>
                  <p>
                    {t("collect1desc")}{" "}
                    <i className="fa-solid fa-caret-right"></i>
                  </p>
                </div>
              </Link>
            </div>

            <div
              className="collect-img"
              style={{
                backgroundImage: ` linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%), url("https://b.zmtcdn.com/data/collections/ba34f5659db282f10729ed6773f278d2_1688041325.png?output-format=webp")`,
                height: "25rem",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "inline",
              }}
            >
              <Link to="/collection2">
                <div className="collect-img-p">
                  <p>{t("collect2")}</p>
                  <p>
                    {t("collect2dec")}
                    <i className="fa-solid fa-caret-right"></i>
                  </p>
                </div>
              </Link>
            </div>

            <div
              className="collect-img"
              style={{
                backgroundImage: ` linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%), url("https://b.zmtcdn.com/data/collections/aaccef7199995c73258750f61c1961f0_1688041059.jpg?output-format=webp")`,
                height: "25rem",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "inline",
              }}
            >
              <Link to="/collection3">
                <div className="collect-img-p">
                  <p>{t("collect3")}</p>
                  <p>
                    {t("collect3dec")}
                    <i className="fa-solid fa-caret-right"></i>
                  </p>
                </div>
              </Link>
            </div>

            <div
              className="collect-img"
              style={{
                backgroundImage: ` linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%), url("https://b.zmtcdn.com/data/collections/ef1c6eee407e8faa590c5fab1e5fd5c3_1679127320.jpg?output-format=webp")`,
                height: "25rem",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "inline",
              }}
            >
              <Link to="/collection4">
                <div className="collect-img-p">
                  <p>{t("collect4")}</p>
                  <p>
                    {t("collect4dec")}{" "}
                    <i className="fa-solid fa-caret-right"></i>
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className="popular-location-sec">
          <div className="location_header">
            <p>{t("blogtext")}</p>
          </div>
          <div className="location-buttons">
            <a href="">
              <div className="location-btn">
                <div className="location-right-text">
                  <Link to={`/blog/5`}>
                    <h6>{t("blogtext1")}</h6>
                    <p>{t("blogtext1desc")}</p>
                  </Link>
                </div>
                <div className="location-icon">
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </div>
            </a>
            <a href="">
              <div className="location-btn">
                <div className="location-right-text">
                  <Link to={`/blog/10`}>
                    <h6>{t("blogtext2")}</h6>
                    <p>{t("blogtext2desc")}</p>
                  </Link>
                </div>
                <div className="location-icon">
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </div>
            </a>
            <a href="">
              <div className="location-btn">
                <div className="location-right-text">
                  <Link to={`/blog/7`}>
                    <h6>{t("blogtext3")}</h6>
                    <p>{t("blogtext3desc")}</p>
                  </Link>
                </div>
                <div className="location-icon">
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </div>
            </a>
            <a href="">
              <div className="location-btn">
                <div className="location-right-text">
                  <Link to={`/blog/13`}>
                    <h6>{t("blogtext4")}</h6>
                    <p>{t("blogtext4desc")}</p>
                  </Link>
                </div>
                <div className="location-icon">
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </div>
            </a>
            <a href="">
              <div className="location-btn">
                <div className="location-right-text">
                  <Link to={`/blog/23`}>
                    <h6>{t("blogtext5")}</h6>
                    <p>{t("blogtext5desc")}</p>
                  </Link>
                </div>
                <div className="location-icon">
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </div>
            </a>
            <a href="">
              <div className="location-btn">
                <div className="location-right-text">
                  <Link to={`/blog/24`}>
                    <h6>{t("blogtext6")}</h6>
                    <p>{t("blogtext6desc")}</p>
                  </Link>
                </div>
                <div className="location-icon">
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </div>
            </a>
            <a href="">
              <div className="location-btn">
                <div className="location-right-text">
                  <Link to={`/blog/20`}>
                    <h6>{t("blogtext7")}</h6>
                    <p>{t("blogtext7desc")}</p>
                  </Link>
                </div>
                <div className="location-icon">
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </div>
            </a>
            <a href="">
              <div className="location-btn">
                <div className="location-right-text">
                  <Link to={`/blog/1`}>
                    <h6>{t("blogtext8")}</h6>
                    <p>{t("blogtext8desc")}</p>
                  </Link>
                </div>
                <div className="location-icon">
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </div>
            </a>
            <a href="">
              <div className="location-btn">
                <div className="location-right-text">
                  <Link to={`/blog/3`}>
                    <h6>{t("blogtext9")}</h6>
                    <p>{t("blogtext9desc")}</p>
                  </Link>
                </div>
                <div className="location-icon">
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </div>
            </a>
          </div>
        </section>
      </main>
      <section className="app-sec">
        <div className="zomato-app container-ay">
          <div className="app-image">
            <img
              src="https://b.zmtcdn.com/data/o2_assets/f773629053b24263e69f601925790f301680693809.png"
              alt=""
            />
          </div>
          <div className="zomato-app-text">
            <h1>{t("zomatoapp")}</h1>
            <p>{t("zomatoappdesc")}</p>
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
                    <label htmlFor="emailOption">{t("email")}</label>
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
                    <label htmlFor="phoneOption">{t("Phone")}</label>
                  </div>
                </div>
                {contactOption === "email" && (
                  <div className="input-submit">
                    <div>
                      <input
                        type="email"
                        id="emailInput"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder={t("email")}
                      />
                    </div>
                    <button type="submit">{t("shareapplink")}</button>
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
                            +{country.code}
                          </option>
                        ))}
                      </select>
                      <p>|</p>
                      <input
                        type="tel"
                        id="phoneInput"
                        value={phone}
                        onChange={handlePhoneChange}
                        placeholder={t("Phone")}
                      />
                    </div>
                    <button type="submit">{t("shareapplink")}</button>
                  </div>
                )}
              </form>
              {successMessage && (
                <div className="success">{successMessage}</div>
              )}
              {errorMessage && <div className="error">{errorMessage}</div>}
            </div>
            <div className="appfromdiv">
              <p>{t("Downloadappfrom")}</p>
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
      <section className="near-location-sec container-ay">
        <div className="near-header">
          <h1>{t("nearrestaurantsection")}</h1>
        </div>
        <div className="near-options">
          <div>
            <div onClick={() => handleDivClick(1)}>
              <p>{t("nearrestoption1")}</p>
              <i
                className={`fa-solid fa-chevron-${
                  openDiv === 1 ? "up" : "down"
                }`}
              ></i>
            </div>
            {openDiv === 1 && (
              <div className="restaurant-near-option">
                <ul>
                  <li>
                    <Link to={`/details/9`}>
                      <a href="">Nane Restaurant</a>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/details/8`}>
                      <a href="">Maide Port Baku</a>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/details/10`}>
                      <a href="">Başkent</a>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/details/22`}>
                      <a href="">Harbour</a>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/details/12`}>
                      <a href="">Hill Restaurant</a>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/details/3`}>
                      <a href="">Cafe Botanist</a>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/details/4`}>
                      <a href="">Cookmood</a>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/details/6`}>
                      <a href="">Mix Point Cafe</a>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/details/13`}>
                      <a href="">Why be</a>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/details/14`}>
                      <a href="">Bonbon Patisserie</a>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/details/16`}>
                      <a href="">Passage 145</a>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/details/18`}>
                      <a href="">Pasifico Lounge & Dining</a>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/details/26`}>
                      <a href="">The Orange Grove</a>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/details/7`}>
                      <a href="">IKIGAI Sushi</a>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <div onClick={() => handleDivClick(2)}>
              <p>{t("nearrestoption2")}</p>
              <i
                className={`fa-solid fa-chevron-${
                  openDiv === 1 ? "up" : "down"
                }`}
              ></i>
            </div>
            {openDiv === 2 && (
              <div className="chains-near-option">
                <ul>
                  <li>
                    <Link to={`/details/6`}>
                      <a href="">Mix Point Cafe</a>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/details/4`}>
                      <a href="">Cookmood</a>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/details/1`}>
                      <a href="">Lovecity</a>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/details/5`}>
                      <a href="">Pancho's</a>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/details/17`}>
                      <a href="">Latitude & Longitude Bar Lounge</a>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/details/14`}>
                      <a href="">Bonbon Patisserie</a>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/details/18`}>
                      <a href="">Pasifico Lounge & Dining</a>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/details/16`}>
                      <a href="">Passage 145</a>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/details/15`}>
                      <a href="">Old Gates Cafe</a>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/details/25`}>
                      <a href="">Evolution Lounge Rooms</a>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/details/23`}>
                      <a href="">White City Bar & Lounge</a>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/details/19`}>
                      <a href="">The Place</a>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/details/27`}>
                      <a href="">La Nota karaoke bar</a>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/details/24`}>
                      <a href="">Barfly Social Hub</a>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/details/3`}>
                      <a href="">Cafe Botanist</a>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <div onClick={() => handleDivClick(3)}>
              <p>{t("nearrestoption3")}</p>
              <i
                className={`fa-solid fa-chevron-${
                  openDiv === 1 ? "up" : "down"
                }`}
              ></i>
            </div>
            {openDiv === 3 && (
              <div className="cities-near-option">
                <ul>
                  <li>
                    <Link to={`/details/5`}>
                      <a href="">Pancho's</a>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/details/13`}>
                      <a href="">Why be</a>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/details/21`}>
                      <a href="">The Crown</a>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/details/11`}>
                      <a href="">Ferma Art</a>
                    </Link>
                  </li>

                  <li>
                    <Link to={`/details/15`}>
                      <a href="">Old Gates Cafe</a>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/details/16`}>
                      <a href="">Passage 145</a>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/details/26`}>
                      <a href="">The Orange Grove</a>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/details/24`}>
                      <a href="">Barfly Social Hub</a>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/details/22`}>
                      <a href="">Harbour</a>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/details/8`}>
                      <a href="">Maide Port Baku</a>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/details/7`}>
                      <a href="">IKIGAI Sushi</a>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/details/14`}>
                      <a href="">Bonbon Patisserie</a>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/details/12`}>
                      <a href="">Hill Restaurant</a>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/details/18`}>
                      <a href="">Pasifico Lounge & Dining</a>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home1;
