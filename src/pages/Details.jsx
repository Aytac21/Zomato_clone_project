import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Modal from "react-modal";
import Login from "../components/Login";
import Signup from "../components/Signup";
import { Link } from "react-router-dom";
import axios from "axios";

function DeliveryDetails({ onCommentAdded }) {
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
    fetch(`http://localhost:8000/details/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Failed to fetch data:", error);
      });
  }, [id]);

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

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]); // Yorumları burada saklayacağız

  useEffect(() => {
    axios.get("/api/comments/").then((response) => {
      setComments(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() === "") {
      console.error("Yorum alanı boş bırakılamaz.");
      return;
    }

    axios
      .post("/api/comments/", { comment: comment })
      .then((response) => {
        onCommentAdded(response.data);
        setComment("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get("/api/get_user_profile/").then((response) => {
      setUser(response.data);
    });
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="center-detail">
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

      <div key={data.id} className="container-ay list-data-detail">
        <div className="detail_page">
          <img
            className="image-detail-page"
            src={data.restaurant_image}
            alt={data.name}
          />
          <p>During delivery: {data.minute} min</p>
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

      <div className="container-ay restaurant-detail">
        <h2>Comments</h2>
        <form className="comment-form" onSubmit={handleSubmit}>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Enter your comment"
            required
            className="comment-input"
          />

          <button
            type="submit"
            className="comment-button"
            onClick={handleSubmit}
          >
            Add Comment
          </button>
        </form>
        <ul className="comment-list">
          {comments.map((comment) => (
            <li key={comment.id} className="comment-item">
              <div className="comment-header">
                <img
                  src={`../media/restaurant_images/default_avatar .webp`}
                  alt=""
                  className="comment-image"
                />
                <span className="commenter">{user.username} </span>
                <span className="comment-date">
                  {new Date(comment.created_at).toLocaleString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                    timeZoneName: "short",
                  })}
                </span>
              </div>
              <p className="comment-text">{comment.comment}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="container-ay">
        <div className="container-ay restaurants-detail">
          <Link to={`http://localhost:8000/details/3`}>
            <div className="blog__ones">
              <div>
                <img
                  src={"../media/restaurant_images/CafeBotanist.png"}
                  alt=""
                />
              </div>
              <br />
              <div>
                <p>Delivery</p>
                <h4>Cafe Botanist</h4>
                <p>
                  Rating: 4.3 <i className="fa-solid fa-star"></i>
                </p>
              </div>
            </div>
          </Link>
          <Link to={`http://localhost:8000/details/17`}>
            <div className="blog__ones">
              <div>
                <img
                  src={"../media/nightlife/latitudelongitudebarlounge.png"}
                  alt=""
                />
              </div>
              <br />
              <div>
                <p>Dining Out</p>
                <h4>Latitude & Longitude Bar Lounge</h4>
                <p>
                  Rating: 4.5 <i className="fa-solid fa-star"></i>
                </p>
              </div>
            </div>
          </Link>
          <Link to={`http://localhost:8000/details/26`}>
            <div className="blog__ones">
              <div>
                <img
                  src={"../media/nightlife/orangegrove_ZscOh6b.png"}
                  alt=""
                />
              </div>
              <br />
              <div>
                <p>Night Life</p>
                <h4>The Orange Grove</h4>
                <p>
                  Rating: 4.3 <i className="fa-solid fa-star"></i>
                </p>
              </div>
            </div>
          </Link>
          <Link to={`http://localhost:8000/details/18`}>
            <div className="blog__ones">
              <div>
                <img
                  src={"../media/nightlife/pasificoloungedining.png"}
                  alt=""
                />
              </div>
              <br />
              <div>
                <p>Delivery</p>
                <h4>Pasifico Lounge & Dining</h4>
                <p>
                  Rating: 4.6 <i className="fa-solid fa-star"></i>
                </p>
              </div>
            </div>
          </Link>
          <Link to={`http://localhost:8000/details/12`}>
            <div className="blog__ones">
              <div>
                <img src={"../media/nightlife/hill.png"} alt="" />
              </div>
              <br />
              <div>
                <p>Dining Out</p>
                <h4>Hill Restaurant</h4>
                <p>
                  Rating: 3.9 <i className="fa-solid fa-star"></i>
                </p>
              </div>
            </div>
          </Link>
          <Link to={`http://localhost:8000/details/15`}>
            <div className="blog__ones">
              <div>
                <img src={"../media/nightlife/oldgatescafe.png"} alt="" />
              </div>
              <br />
              <div>
                <p>Dining Out</p>
                <h4>Old Gates Cafe</h4>
                <p>
                  Rating: 4.3 <i className="fa-solid fa-star"></i>
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DeliveryDetails;
