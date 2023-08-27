import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Error.css";

function Error() {
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
  const [searchValue, setSearchValue] = useState("");
  const [searchModalDatas, setSearchModalDatas] = useState([]);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const handleChangeSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    console.log(value);
    setSearchModalDatas([...data.filter((a) => a.name.includes(value))]);
    setIsSearchModalOpen(!!value);
  };

  const [isSortUp, setIsSortUp] = useState(true);
  const [isInputClicked, setIsInputClicked] = useState(false);

  const toggleSortIcon = () => {
    setIsSortUp((prevIsSortUp) => !prevIsSortUp);
    setIsInputClicked(true);
  };

  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/foods/");
        const data = await response.json();
        setFoods(data);
        console.log("Foods data:", data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchFoods();
  }, []);

  return (
    <>
      <nav className="delivery-nav">
        <div className="container-ays">
          <div className="delivery-img">
            <Link to={`/`}>
              <img
                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                alt=""
              />
            </Link>

            <div className="delivery-search">
              <div className="searchbox">
                <div className="search-city-delivery">
                  <div>
                    <i className="fa-solid fa-location-dot"></i>
                    <input
                      value={searchValue}
                      onChange={(e) => handleChangeSearch(e)}
                      type="text"
                      placeholder="Search for restaurant"
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
                    >
                      {searchModalDatas.map((a) => (
                        <Link key={a.id} to={`/delivery/details/${a.id}`}>
                          <li key={a.id}>
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
              <div className="loginregister">
                <p>
                  <a>Logout</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="all-errors">
        <div className="errors">
          <div className="error-img">
            <img src="https://b.zmtcdn.com/images/z404x2.png?output-format=webp" />
          </div>
          <div className="error-content">
            <p>
              This is a 404 page and we think it's fairly clear <br /> You
              aren't going to find what you're looking for here <br /> But we
              know you're hungry, so don't fret or rage <br /> Hit that big red
              button to go back to our homepage
            </p>
            <Link to={"home/"}>
              <button>Back to home</button>
            </Link>
            <span>
              <p>Prude</p> | <p>Crude</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Error;
