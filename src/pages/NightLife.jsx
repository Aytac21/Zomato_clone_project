import Modal from "react-modal";
import Login from "./../components/Login";
import Signup from "./../components/Signup";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const LOCAL_STORAGE_KEY = "deliveryData";
import axios from "axios";
import { useLocation } from "react-router-dom";

function NightLife() {
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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  );

  const filterTextByWordCount = (text, wordCount) => {
    if (!text) {
      return "";
    }

    const words = text.split(" ");

    if (words.length <= wordCount) {
      return text;
    }

    const filteredWords = words.slice(0, wordCount);
    const filteredText = filteredWords.join(" ");

    return filteredText + " ...";
  };

  const [showFilteredData, setShowFilteredData] = useState(false);

  useEffect(() => {
    // Fetch restaurant data from the API
    axios
      .get("http://127.0.0.1:8000/restaurants/?category=nightlife")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

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

  const [isSortUp, setIsSortUp] = useState(true);
  const [isInputClicked, setIsInputClicked] = useState(false);

  const toggleSortIcon = () => {
    setIsSortUp((prevIsSortUp) => !prevIsSortUp);
    setIsInputClicked(true);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(foods));
  }, [foods]);

  const filterByRating = (e) => {
    e.preventDefault();
    const filtered = data.filter((item) => item.rating > 4.0);
    setData(filtered);
    setShowFilteredData(true);
  };

  const filterByRatingHightoLow = (e) => {
    e.preventDefault();
    const sortedData = bubbleSorthighlowByRating(data);
    setData(sortedData);
    setShowFilteredData(true);
  };

  const bubbleSorthighlowByRating = (arr) => {
    const n = arr.length;
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        if (arr[i].rating < arr[i + 1].rating) {
          const temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
    return arr;
  };

  const filterByCostLowToHigh = (e) => {
    e.preventDefault();
    const sortedData = [...data].sort((a, b) => a.cost - b.cost);
    setData(sortedData);
    setShowFilteredData(true);
  };

  const [startIndex, setStartIndex] = useState(0);
  const [visibleFoods, setVisibleFoods] = useState([]);
  const [firstOrders, setFirstOrders] = useState([]);
  const afterFilterData = localStorage.getItem("afterFilter");
  console.log("modaldan gelen melumat : " + afterFilterData);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/firstorder/")
      .then((response) => setFirstOrders(response.data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    const updateVisibleFoods = () => {
      const endIndex = startIndex + 6;
      const newVisibleFoods = firstOrders.slice(startIndex, endIndex);
      setVisibleFoods(newVisibleFoods);
    };

    updateVisibleFoods();
  }, [startIndex, firstOrders]);

  const handleNext = () => {
    const newStartIndex = startIndex + 1;
    setStartIndex(newStartIndex);

    if (newStartIndex < firstOrders.length) {
      setStartIndex(newStartIndex);
    }
  };

  const handlePrevious = () => {
    const newStartIndex = startIndex - 1;
    setStartIndex(newStartIndex);

    if (newStartIndex >= 0) {
      setStartIndex(newStartIndex);
    }
  };

  const location = useLocation();
  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    // Sayfa rotasını alalım ve buna göre stil değiştirelim
    const path = location.pathname;
    if (path === "/delivery") {
      setPageTitle("Delivery");
    } else if (path === "/diningout") {
      setPageTitle("Dining Out");
    } else if (path === "/nightlife") {
      setPageTitle("Nightlife");
    } else {
      setPageTitle(""); // Diğer sayfalarda başlık metnini temizleyelim
    }
  }, [location]);

  const headingStyle = {
    color: pageTitle === "Nightlife" ? "red" : "black",
  };

  return (
    <>
      <nav className="delivery-nav">
        <div className="container-ay">
          <div className="delivery-img">
            <Link to={`home/`}>
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
                        <Link key={a.id} to={`/details/${a.id}`}>
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
      <Modal isOpen={loginModalOpen} onRequestClose={closeLoginModal}>
        <Login onClose={closeLoginModal} />
      </Modal>
      <Modal isOpen={signupModalOpen} onRequestClose={closeSignupModal}>
        <Signup onClose={closeSignupModal} />
      </Modal>
      <main className="container-ay">
        <div>
          <p className="pages">
            <Link to={`/`}>Home</Link>/ <Link>Baku</Link>/<Link> 28 may</Link>
          </p>
        </div>
        <section className="delivery-option">
          <Link to={`/delivery`}>
            <div>
              <img
                src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp"
                alt=""
              />
              <h1>Delivery</h1>
            </div>
          </Link>
          <Link to={`/diningout`}>
            <div>
              <img
                src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png?output-format=webp"
                alt=""
              />
              <h1>Dining Out</h1>
            </div>{" "}
          </Link>
          <div>
            <img
              src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png?output-format=webp"
              alt=""
            />
            <h1 style={headingStyle}>Nightlife</h1>
          </div>
        </section>
      </main>
      <section className="filter-sec">
        <div className="delivery-filter container-ay">
          <a href="" onClick={filterByRatingHightoLow}>
            Rating: High to Low
          </a>
          <a href="" onClick={filterByRating}>
            Rating: 4.0+
          </a>
          <a href="" onClick={filterByCostLowToHigh}>
            Cost: Low to High
          </a>
        </div>
        <div>
          <div className="choise-bg">
            <div className="container-ay">
              <p>Inspiration for your first order</p>
              <div className="sort-delivery">
                {startIndex > 0 && (
                  <i
                    onClick={handlePrevious}
                    className="fa-solid fa-chevron-left"
                  ></i>
                )}
                <div className="food-choice">
                  {visibleFoods.map((order) => (
                    <div key={order.id} className="food-sort">
                      <img
                        src={order.image}
                        alt={order.name}
                        className="food-image"
                      />
                      <h1>{order.name}</h1>
                    </div>
                  ))}
                </div>
                {startIndex + 6 < firstOrders.length && (
                  <i
                    onClick={handleNext}
                    className="fa-solid fa-chevron-right"
                  ></i>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="container-ay">
          <div className="orderonline">
            <h1>Order food online in Connaught Place</h1>
            <div>
              <div className="order-set-delivery">
                {data.map((item) => (
                  <div key={item.id} className="list-data-delivery">
                    <Link to={`/details/${item.id}`} className="read">
                      <div
                        className="image-food-list"
                        style={{
                          backgroundImage: `url(${item.restaurant_image})`,
                        }}
                      >
                        <h5>50% OFF up to 100</h5>
                      </div>
                      <div>
                        <div className="cafe-about-delivery">
                          <p>{item.name}</p>
                          <p>
                            {item.rating} <i className="fa-solid fa-star"></i>
                          </p>
                        </div>
                        <div className="cost-name">
                          <p>{filterTextByWordCount(item.meals, 3)}</p>
                          <p>{item.cost} ₼</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NightLife;
