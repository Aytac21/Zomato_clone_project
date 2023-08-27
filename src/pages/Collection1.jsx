import { useState } from "react";
import { Link } from "react-router-dom";
function Collection1() {
  const [openDiv, setOpenDiv] = useState(null);
  const handleDivClick = (index) => {
    setOpenDiv((prevOpenDiv) => (prevOpenDiv === index ? null : index));
  };
  return (
    <>

    <div className="collections_header">

      <div className="zomotologoimg">
        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="" />
      </div>

      <div className="searchbox">
        <div className="search-city">
          <i className="fa-solid fa-location-dot"></i>
          <input type="text" placeholder="Bakı, 28 may, Sahil, Nərimanov |" />
          <i className="fa-solid fa-sort-up"></i>|
        </div>
        <div className="search-restaurant">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Restoran, mətbəx və ya yemək axtarın"
          />
        </div>
      </div>

    </div>
      
      <div className="unique_bg">
        <div className="unique_img">
          <img
            src="https://b.zmtcdn.com/data/collections/f0b10c98ba91df2519fc56cd155b5f06_1674569129.jpg?fit=around|858.4000000000001:256&crop=858.4000000000001:256;*,*"
            alt=""
          />
          <div className="unique_title">
            <h1>Celeb-loved Places</h1>
            <h6>
              Discover top-notch spots in the city that your beloved celebrities
              can't get enough of.
            </h6>
            <p>10 Places</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="restaurants">
         
          <div className="restaurant">
          <Link to="/details1">
            <section className="rest">
              <a href="#">
                <div className="rest_img">
                  <img
                    src="https://b.zmtcdn.com/data/pictures/1/20615061/1fe059e793cb6998775ccdcedd719a71.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*"
                    alt=""
                  />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">Bukhara - ITC Maurya</a>
                <div className="stars">
                  <div className="dinings">
                    <div className="dinings_star">
                      <p>4.4</p>
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

                <div className="countries">
                  <p>North Indian, </p>
                  <p>Kebab, </p>
                  <p>Desserts </p>
                </div>
                <div className="rest_location">
                  <p>ITC Maurya, Chanakyapuri, New Delhi</p>
                </div>
              </div>
            </section>
            </Link>
          </div>
          
          

          <div className="restaurant">
          <Link to="/details2">
            <section className="rest">
              <a href="#">
                <div className="rest_img">
                  <img
                    src="https://b.zmtcdn.com/data/pictures/2/18617282/b21ac74cac3dd8d57caa73ec1e8fbb4f.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*"
                    alt=""
                  />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">Evergreen Sweet House</a>
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
                  <div className="line"></div>

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

                <div className="countries">
                  <p>North Indian, </p>
                  <p>South Indian, </p>
                  <p>Desserts </p>
                </div>
                <div className="rest_location">
                  <p className="sponsor_loc">Green Park, New Delhi</p>
                </div>
              </div>
            </section>
            </Link>
          </div>

          <div className="restaurant">
          <Link to="/details3">
            <section className="rest">
              <a href="#">
                <div className="rest_img">
                  <img
                    src="https://b.zmtcdn.com/data/pictures/5/20361165/dda83fdeb29bfb428f4cefe7b86c9bb2.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*"
                    alt=""
                  />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">Nathu's Sweets</a>
                <div className="stars">
                  <div className="dinings">
                    <div className="dinings_star ">
                      <p>3.5</p>
                      <i className="fa-solid fa-star"></i>
                    </div>
                  </div>
                  <div className="dining">
                    <p>DINING</p>
                  </div>
                  <div className="line"></div>

                  <div className="dinings">
                    <div className="dinings_star ">
                      <p>3.8</p>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="dining deliv">
                      <p>DELIVERY</p>
                    </div>
                  </div>
                </div>

                <div className="countries">
                  <p>Mithai, </p>
                  <p>South Indian, </p>
                  <p>Chinese </p>
                </div>
                <div className="rest_location">
                  <p>Bengali Market, Mandi House</p>
                </div>
              </div>
            </section>
            </Link>
          </div>

          <div className="restaurant">
            <section className="rest">
              <a href="#">
                <div className="rest_img">
                  <img
                    src="https://b.zmtcdn.com/data/reviews_photos/2c7/e1c37bb9babf399a91df0a07020752c7_1599322679.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*"
                    alt=""
                  />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">Indian Accent</a>
                <div className="stars">
                  <div className="dinings">
                    <div className="dinings_star">
                      <p>4.9</p>
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

                <div className="countries">
                  <p>Modern Indian, </p>
                  <p>North Indian, </p>
                  
                </div>
                <div className="rest_location">
                  <p>The Lodhi, Lodhi Road, New Delhi</p>
                </div>
              </div>
            </section>
          </div>

          <div className="restaurant">
            <section className="rest">
              <a href="#">
                <div className="rest_img">
                  <img
                    src="https://b.zmtcdn.com/data/reviews_photos/a5f/1a5fb805d61d7d07917fdf3c77b5ea5f_1398096182.JPG?fit=around|318.75:231.25&crop=318.75:231.25;*,*"
                    alt=""
                  />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">Caara At Ogaan</a>
                <div className="stars">
                  <div className="dinings">
                    <div className="dinings_star">
                      <p>4.2</p>
                      <i className="fa-solid fa-star"></i>
                    </div>
                  </div>
                  <div className="dining">
                    <p>DINING</p>
                  </div>
                  <div className="line"></div>

                  <div className="dinings">
                    <div className="dinings_star">
                      <p>4.4</p>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="dining deliv">
                      <p>DELIVERY</p>
                    </div>
                  </div>
                </div>

                <div className="countries">
                  <p>European, </p>
                  <p>Mediterranean </p>
               
                </div>
                <div className="rest_location">
                  <p>Chanakyapuri, New Delhi</p>
                </div>
              </div>
            </section>
          </div>

          <div className="restaurant">
            <section className="rest">
              <a href="#">
                <div className="rest_img">
                  <img
                    src="https://b.zmtcdn.com/data/pictures/1/2701/f0673289ac0adbea33cd373a4fbf1e01.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*"
                    alt=""
                  />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">Bengali Sweet Centre</a>
                <div className="stars">
                  <div className="dinings">
                    <div className="dinings_star">
                      <p>3.9</p>
                      <i className="fa-solid fa-star"></i>
                    </div>
                  </div>
                  <div className="dining">
                    <p>DINING</p>
                  </div>
                  <div className="line"></div>

                  <div className="dinings">
                    <div className="dinings_star">
                      <p>4.1</p>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="dining deliv">
                      <p>DELIVERY</p>
                    </div>
                  </div>
                </div>

                <div className="countries">
                  <p>Mithai, </p>
                  <p>North Indian, </p>
                  <p>Chinese, </p>
                  <p>Shake </p>
                </div>
                <div className="rest_location">
                  <p>South Extension 1, New Delhi</p>
                </div>
              </div>
            </section>
          </div>

          <div className="restaurant">
            <section className="rest">
              <a href="#">
                <div className="rest_img">
                  <img
                    src="https://b.zmtcdn.com/data/pictures/7/19214877/c7db642dc404f7ba96127853468c7e2b.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*"
                    alt=""
                  />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">Nirula's</a>
                <div className="stars">
                  <div className="dinings">
                    <div className="dinings_star">
                      <p>4.2</p>
                      <i className="fa-solid fa-star"></i>
                    </div>
                  </div>
                  <div className="dining">
                    <p>DINING</p>
                  </div>
                  <div className="line"></div>

                  <div className="dinings">
                    <div className="dinings_star">
                      <p>4.0</p>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="dining deliv">
                      <p>DELIVERY</p>
                    </div>
                  </div>
                </div>

                <div className="countries">
                  <p>Pizza, </p>
                  <p>Burger, </p>
                  <p>Momos, </p>
            
                  <p>Beverages </p>
                </div>
                <div className="rest_location">
                  <p>Connaught Place, New Delhi</p>
                </div>
              </div>
            </section>
          </div>

          <div className="restaurant">
            <section className="rest">
              <a href="#">
                <div className="rest_img">
                  <img
                    src="https://b.zmtcdn.com/data/pictures/6/20463756/7bff1c2c97b78219c3e7634a7a027038.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*"
                    alt=""
                  />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">Le Cirque - The Leela Palace</a>
                <div className="stars">
                  <div className="dinings">
                    <div className="dinings_star">
                      <p>4.4</p>
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

                <div className="countries">
                  <p>French, </p>
                  <p>Italian </p>
                </div>
                <div className="rest_location">
                  <p>The Leela Palace, Chanakyapuri, New De</p>
                </div>
              </div>
            </section>
          </div>

          <div className="restaurant">
            <section className="rest">
              <a href="#">
                <div className="rest_img">
                  <img
                    src="https://b.zmtcdn.com/data/pictures/7/20493497/997c9c4865f729ab36c61def89c5649c.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*"
                    alt=""
                  />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">Royal China</a>
                <div className="stars">
                  <div className="dinings">
                    <div className="dinings_star">
                      <p>4.0</p>
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

                <div className="countries">
                  <p>İtalian , </p>
                  <p>Spanish, </p>

                  <p>Beverages </p>
                </div>
                <div className="rest_location">
                  <p>Sector 29, Gurgaon</p>
                </div>
              </div>
            </section>
          </div>

          <div className="restaurant">
            <section className="rest">
              <a href="#">
                <div className="rest_img">
                  <img
                    src="https://b.zmtcdn.com/data/pictures/1/18395381/d1f4a102c6f6482ca07f297d3f396451.jpg?output-format=webp&fit=around|318.75:231.25&crop=318.75:231.25;*,*"
                    alt=""
                  />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">Olive Bar & Kitchen</a>
                <div className="stars">
                  <div className="dinings">
                    <div className="dinings_star">
                      <p>4.0</p>
                      <i className="fa-solid fa-star"></i>
                    </div>
                  </div>
                  <div className="dining">
                    <p>DINING</p>
                  </div>
                  <div className="line"></div>

                  <div className="dinings">
                    <div className="dinings_star">
                      <p>3.7</p>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="dining deliv">
                      <p>DELIVERY</p>
                    </div>
                  </div>
                </div>

                <div className="countries">
                  <p>İtalian , </p>
                  <p>Mediterranean, </p>
                 
                  <p>Beverages </p>
                </div>
                <div className="rest_location">
                  <p>Mehrauli, New Delhi</p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <section className="near-location-sec ">
        <div className="near-header">
          <h1>Explore options near me</h1>
        </div>
        <div className="near-options">
          <div>
            <div onClick={() => handleDivClick(1)}>
              <p>Popular cuisines near me</p>
              <i
                className={`fa-solid fa-chevron-${
                  openDiv === 1 ? "up" : "down"
                }`}
              ></i>
            </div>
            {openDiv === 1 && (
              <div className="cuisine-near-option">
                <ul>
                  <li>
                    <a href="">Bakery food near me</a>
                  </li>
                  <li>
                    <a href="">Beverages food near me</a>
                  </li>
                  <li>
                    <a href="">Biryani food near me</a>
                  </li>
                  <li>
                    <a href="">Burger food near me</a>
                  </li>
                  <li>
                    <a href="">Chinese food near me</a>
                  </li>
                  <li>
                    <a href="">Continental food near me</a>
                  </li>
                  <li>
                    <a href="">Desserts food near me</a>
                  </li>
                  <li>
                    <a href="">Italian food near me</a>
                  </li>
                  <li>
                    <a href="">Kebab food near me</a>
                  </li>
                  <li>
                    <a href="">Mithai food near me</a>
                  </li>
                  <li>
                    <a href="">Momos food near me</a>
                  </li>
                  <li>
                    <a href="">Mughlai food near me</a>
                  </li>
                  <li>
                    <a href="">North Indian food near me</a>
                  </li>
                  <li>
                    <a href="">Pasta food near me</a>
                  </li>
                  <li>
                    <a href="">Pizza food near me</a>
                  </li>
                  <li>
                    <a href="">Rolls food near me</a>
                  </li>
                  <li>
                    <a href="">Sandwich food near me</a>
                  </li>
                  <li>
                    <a href="">Shake food near me</a>
                  </li>
                  <li>
                    <a href="">South Indian food near me</a>
                  </li>
                  <li>
                    <a href="">Street food near me</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <div onClick={() => handleDivClick(2)}>
              <p>Popular restaurant types near me</p>
              <i
                className={`fa-solid fa-chevron-${
                  openDiv === 1 ? "up" : "down"
                }`}
              ></i>
            </div>
            {openDiv === 2 && (
              <div className="restaurant-near-option">
                <ul>
                  <li>
                    <a href="">Bakeries near me</a>
                  </li>
                  <li>
                    <a href="">Bars near me</a>
                  </li>
                  <li>
                    <a href="">Beverage Shops near me</a>
                  </li>
                  <li>
                    <a href="">Bhojanalya near me</a>
                  </li>
                  <li>
                    <a href="">Cafés near me</a>
                  </li>
                  <li>
                    <a href="">Casual Dining near me</a>
                  </li>
                  <li>
                    <a href="">Clubs near me</a>
                  </li>
                  <li>
                    <a href="">Cocktail Bars near me</a>
                  </li>
                  <li>
                    <a href="">Confectioneries near me</a>
                  </li>
                  <li>
                    <a href="">Dessert Parlors near me</a>
                  </li>
                  <li>
                    <a href="">Dhabas near me</a>
                  </li>
                  <li>
                    <a href="">Fine Dining near me</a>
                  </li>
                  <li>
                    <a href="">Food Courts near me</a>
                  </li>
                  <li>
                    <a href="">Food Trucks near me</a>
                  </li>
                  <li>
                    <a href="">Irani Cafes near me</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <div onClick={() => handleDivClick(3)}>
              <p>Top Restaurant Chains</p>
              <i
                className={`fa-solid fa-chevron-${
                  openDiv === 1 ? "up" : "down"
                }`}
              ></i>
            </div>
            {openDiv === 3 && (
              <div className="chains-near-option">
                <ul>
                  <li>
                    <a href="">Bikanervala</a>
                  </li>
                  <li>
                    <a href="">Biryani Blues</a>
                  </li>
                  <li>
                    <a href="">BTW</a>
                  </li>
                  <li>
                    <a href="">Burger King</a>
                  </li>
                  <li>
                    <a href="">Burger Singh</a>
                  </li>
                  <li>
                    <a href="">Domino's</a>
                  </li>
                  <li>
                    <a href="">Dunkin' Donuts</a>
                  </li>
                  <li>
                    <a href="">Haldiram's</a>
                  </li>
                  <li>
                    <a href="">KFC</a>
                  </li>
                  <li>
                    <a href="">Krispy Kreme</a>
                  </li>
                  <li>
                    <a href="">McDonald's</a>
                  </li>
                  <li>
                    <a href="">Moti Mahal Delux</a>
                  </li>
                  <li>
                    <a href="">Om Sweets & Snacks</a>
                  </li>
                  <li>
                    <a href="">Paradise Biryani</a>
                  </li>
                  <li>
                    <a href="">Pizza Hut</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <div onClick={() => handleDivClick(4)}>
              <p>Cities We Deliver To</p>
              <i
                className={`fa-solid fa-chevron-${
                  openDiv === 1 ? "up" : "down"
                }`}
              ></i>
            </div>
            {openDiv === 4 && (
              <div className="cities-near-option">
                <ul>
                  <li>
                    <a href="">Delhi NCR</a>
                  </li>
                  <li>
                    <a href="">Kolkata</a>
                  </li>
                  <li>
                    <a href="">Mumbai</a>
                  </li>
                  <li>
                    <a href="">Bengaluru</a>
                  </li>
                  <li>
                    <a href="">Pune</a>
                  </li>
                  <li>
                    <a href="">Hyderabad</a>
                  </li>
                  <li>
                    <a href="">Chennai</a>
                  </li>
                  <li>
                    <a href="">Lucknow</a>
                  </li>
                  <li>
                    <a href="">Kochi</a>
                  </li>
                  <li>
                    <a href="">Jaipur</a>
                  </li>
                  <li>
                    <a href="">Ahmedabad</a>
                  </li>
                  <li>
                    <a href="">Chandigarh</a>
                  </li>
                  <li>
                    <a href="">Goa</a>
                  </li>
                  <li>
                    <a href="">Indore</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
      </div>
    </>
  );
}

export default Collection1;
