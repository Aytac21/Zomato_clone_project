
import { useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Details() {

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

  return (
    <>
      <div className="container">
        <div className="collections_header">
          <div className="zomotologoimg">
            <img
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
              alt=""
            />
          </div>

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
        </div>
        <div className="photos">
          <div className="image1">
            <img
              src="https://b.zmtcdn.com/data/pictures/1/20615061/1fe059e793cb6998775ccdcedd719a71.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
              alt=""
            />
          </div>
          <div className="image2">
            <div className="photo1">
              <img
                src="https://b.zmtcdn.com/data/pictures/1/20615061/9ad6a49659fdfda254c3ff47530149e0.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*"
                alt=""
              />
            </div>
            <div className="photo1">
              <img
                src="https://b.zmtcdn.com/data/pictures/1/20615061/5a5f547d77dcca9b216d07fe3cb24777.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*"
                alt=""
              />
            </div>
          </div>
          <div className="image3">
            <img
              src="https://b.zmtcdn.com/data/pictures/1/20615061/d56b590e0a4b30eadfe43f8563335bcd.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*"
              alt=""
            />
          </div>
        </div>

        <div className="restaurantname">Bukhara-İTC Maurya</div>
        <div className="metbex">North İndia, Kabab, Desserts</div>
        <div className="unvan">Nev Delhi Chanakyapiur</div>
        <div className="open">Opens at 08:00 pm</div>
        <div className="close">Closed at 22:00 am</div>

        <div className="direc_book_share">
          <div className="direction">
            <i className="fa-solid fa-diamond-turn-right"></i>
            <span>Direction</span>
          </div>
          <div className="direction">
            <i className="fa-regular fa-bookmark"></i>
            <span>Bookmark</span>
          </div>
          <div className="direction">
            <i className="fa-solid fa-share"></i>
            <span>Share</span>
          </div>
        </div>
        <h1 className="basliq">About this place</h1>
        <div className="demo">
          <div className="demo_flex">
            <div className="demo_col1">
              <h2 className="h2">Menu</h2>
              <div className="menu_image">
                <img src="https://b.zmtcdn.com/data/menus/061/20615061/b5a0f640c6a72743761da1c8303b2ed0.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A" />
                <img
                  src="https://b.zmtcdn.com/data/menus/061/20615061/71d0038b13bf610214714be924472a71.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
                  alt=""
                />
              </div>
           
              <p>Menu</p>

              <h2 className="h2">Cuisines</h2>
              <div className="cuisines">
                <p>North İndian</p>
                <p>Kebab</p>
                <p>Desserts</p>
              </div>
            </div>
            <div className="demo_location">
              <h5>Call</h5>
              <p>+91 8068974427</p>
              <div className="demo_loc_direction">
                <h5>Direction</h5>
                <div className="location_map">
                  <div className="map">
                    <div className="map_back"></div>
                    <img
                      src="https://maps.zomato.com/php/staticmap?center=28.5396436000,77.3664859000&maptype=zomato&markers=28.5396436000,77.3664859000,pin_res32&sensor=false&scale=2&zoom=16&language=en&size=240x150&size=400x240&size=650x250"
                      alt=""
                    />
                  </div>
                  <span className="openstreet">
                    <a href="">OpenStreetMap</a>
                    Contributors
                  </span>
                </div>
              </div>
              <p className="map_location">
                A-101, Jmd Arcade, Sector 104, Hajipur, Noida
              </p>
              <div className="copy_and_direction">
                <div className="copy">
                  <i className="fa-solid fa-copy"></i>
                  <span>Copy</span>
                </div>
                <div className="direction">
                  <i className="fa-solid fa-diamond-turn-right"></i>
                  <span>Direction</span>
                </div>
              </div>
            </div>
          </div>

          <h2 className="h2">Popular Dishes</h2>
          <p>
            Sikanderi Raan, Meat Masala, Tandoori Phool, Chicken Khurchan, Onion
            Kulcha, Jumbo Prawns
          </p>

          <h2 className="h2">People Say This Place Is Known For</h2>
          <p>
            Modern Vibe, Jazz Music, Sophisticated, Safe Place, Efficient
            Service, Luxury
          </p>

          <h2 className="h2">Avarage Cost</h2>
          <p>₹8,000 for two people (approx.) Without alcohol</p>
          <p>How do we calculate cost for two?</p>
          <p>
            Cash and Cards accepted <br />
            Digital payments accepted
          </p>

          <h2 className="h2">More Info</h2>
          <div className="info ">
            <div className="info1">
              <ul>
                <li>
                  <i className="fa-regular fa-circle-check"></i>
                  <span>Wheelchair Accessible</span>
                </li>
                <li>
                  <i className="fa-regular fa-circle-check"></i>
                  <span>4/5 Star</span>
                </li>
                <li>
                  <i className="fa-regular fa-circle-check"></i>
                  <span>Family Friendly</span>
                </li>
                <li>
                  <i className="fa-regular fa-circle-check"></i>
                  <span>Desserts and Bakes</span>
                </li>
                <li>
                  <i className="fa-regular fa-circle-check"></i>
                  <span>Indoor Seating</span>
                </li>
                <li>
                  <i className="fa-regular fa-circle-check"></i>
                  <span>Romantic Dining</span>
                </li>
              </ul>
            </div>

            <div className="info1">
              <ul>
                <li>
                  <i className="fa-regular fa-circle-check"></i>
                  <span>Full Bar Available</span>
                </li>
                <li>
                  <i className="fa-regular fa-circle-check"></i>
                  <span>Restricted Entry</span>
                </li>
                <li>
                  <i className="fa-regular fa-circle-check"></i>
                  <span>Luxury Dining</span>
                </li>
                <li>
                  <i className="fa-regular fa-circle-check"></i>
                  <span>Valet Parking Available</span>
                </li>
                <li>
                  <i className="fa-regular fa-circle-check"></i>
                  <span>Table booking recommended</span>
                </li>
              </ul>
            </div>
          </div>

          <h1>Are you a food blogger?</h1>
          <p className="bloglink">
            {" "}
            <a href=""> Add a Zomato spoonback to your blog </a>
          </p>

          <h2 className="h2">Review Highlights</h2>
          <div className="highlightes">
            <p>Sikanderi Raan</p>
            <p>Meat Masala</p>
            <p>Tandoori Phool</p>
            <p>Chicken Khurchan</p>
            <p>Onion Kulcha</p> <br />
            <p>Jumbo Prawns</p>
            <p>Modern Vibe</p>
            <p>Jazz Music</p>
            <p>Sophisticated</p>
            <p>Safe Place</p>
            <p>Efficient Service</p> <br />
            <p>Luxury</p>
          </div>

          {/* <div className="h2">Featured In</div>
          <div className="collection-blog featured_col">
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
                  <p>Celeb-loved Places</p>
                  <p>
                    10 Places <i className="fa-solid fa-caret-right"></i>
                  </p>
                </div>
              </Link>
            </div>
          </div>

          <div className="h2">OUR SPONSORS</div>
          <div className="sponsors">
            <div className="sponsor">
              <div className="sponsor_img">
                <img
                  src="https://b.zmtcdn.com/data/pictures/8/18808498/be6738ecb181d04db56c17923b315135_featured_v2.jpg?output-format=webp"
                  alt=""
                />
              </div>
              <div className="sponsor_detail">
                <h4>Kampai</h4>
                <div className="stars">
                  <div className="dinings">
                    <div className="dinings_star">
                      <p>3.4</p>
                      <i className="fa-solid fa-star"></i>
                    </div>
                  </div>
                  <div className="dining">
                    <p>DINING</p>
                  </div>
                  <div className="line det"></div>

                  <div className="dinings">
                    <div className="dinings_star">
                      <p>4.2</p>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="dining deliv">
                      <p>DELIVERY</p>
                    </div>
                  </div>
                </div>
                <p>Japanese, Sushi, Asian, Oriental, Beverages</p>
              </div>
            </div>

            <div className="sponsor">
              <div className="sponsor_img">
                <img
                  src="https://b.zmtcdn.com/data/pictures/1/20628331/d4ae66e9b7dfa7faf36f1c578b27955e_featured_v2.jpg?output-format=webp"
                  alt=""
                />
              </div>
              <div className="sponsor_detail">
                <h4>Circle Restaurant</h4>
                <div className="stars">
                  <div className="dinings">
                    <div className="dinings_star">
                      <p>3.7</p>
                      <i className="fa-solid fa-star"></i>
                    </div>
                  </div>
                  <div className="dining">
                    <p>DINING</p>
                  </div>
                  <div className="line"></div>

                  <div className="dinings">
                    <div className="dinings_star delivery">
                      <p>-</p>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="dining deliv">
                      <p>DELIVERY</p>
                    </div>
                  </div>
                </div>
                <p>North Indian, Asian, Japanese, Chinese, Desserts</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Details;
