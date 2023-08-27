import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Modal from "react-modal";
import Login from "./../components/Login";
import Signup from "./../components/Signup";

function DiningOutDetails() {
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

  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/diningout/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/diningout/")
      .then((response) => {
        setRestaurant(response.data);
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
    console.log(value);
    setSearchModalDatas([...restaurant.filter((a) => a.name.includes(value))]);
    setIsSearchModalOpen(!!value);
  };

  const [isSortUp, setIsSortUp] = useState(true);
  const [isInputClicked, setIsInputClicked] = useState(false);

  const toggleSortIcon = () => {
    setIsSortUp((prevIsSortUp) => !prevIsSortUp);
    setIsInputClicked(true);
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <nav className="delivery-nav">
        <div className="container-ay">
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
                  <a onClick={openLoginModal}>Login</a>
                </p>
                <p>
                  <a onClick={openSignupModal}>Sign up</a>
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

      <div key={data.id} className="container-ay list-data-detail">
        <div className="detail_page">
          <img
            className="image-detail-page"
            src={data.restaurant_image}
            alt={data.name}
          />
        </div>
        <div>
          <div className="cafe-about-delivery">
            <p id="restaurant-name">{data.name}</p>
            <p id="restaurant-raiting">
              {data.rating} <i className="fa-solid fa-star"></i>
            </p>
          </div>
          <div className="cost-name">
            <p id="restaurant-meals">Menu: {data.meals}</p>
          </div>
          <p id="restaurant-context">{data.context}</p>
        </div>
      </div>
    </>
  );
}

export default DiningOutDetails;
