import { useState } from "react";
function Collection2() {
  const [openDiv, setOpenDiv] = useState(null);
  const handleDivClick = (index) => {
    setOpenDiv((prevOpenDiv) => (prevOpenDiv === index ? null : index));
  };
  return (
    <>
      <div className="collections_header">
        <div className="zomotologoimg">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt=""
          />
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
            src="https://b.zmtcdn.com/data/collections/1fc0c2ac6a787585958318b9af5dd08c_1688041326.png?output-format=webp&fit=around|858.4000000000001:256&crop=858.4000000000001:256;*,*"
            alt=""
          />
          <div className="unique_title">
            <h1>Unique Dining Experiences</h1>
            <h6>
              From relishing meals in a luxury train coach to sipping cocktails
              in a revolving restaurant, these places promise indelible
              experiences.
            </h6>
            <p>9 Places</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="restaurants">
          <div className="restaurant">
            <section className="rest">
              <a href="#">
                <div className="rest_img">
                  <img
                    src="https://b.zmtcdn.com/data/pictures/5/18895645/bf8f15ff870f246156524f4d0f83aedc.jpg?output-format=webp&fit=around|318.75:231.25&crop=318.75:231.25;*,*"
                    alt=""
                  />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">I Sacked Newton</a>
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
                  <p>North Indian, </p>
                  <p>Continental, </p>
                  <p>Oriental, </p>
                  <p>Thai </p>
                </div>
                <div className="rest_location">
                  <p>Advant Navis Business Park, Noida</p>
                </div>
              </div>
            </section>
          </div>

          <div className="restaurant">
            <section className="rest">
              <a href="#">
                <div className="rest_img">
                  <img
                    src="https://b.zmtcdn.com/data/pictures/4/19701744/171a0127ec591d1717190edb3d59ce0d.jpg?output-format=webp&fit=around|318.75:231.25&crop=318.75:231.25;*,*"
                    alt=""
                  />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">Railicious</a>
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
                  <p>Chinese, </p>
                  <p>Fast Food, </p>
                  <p>Desserts </p>
                </div>
                <div className="rest_location">
                  <p>Sector 135, Noida</p>
                </div>
              </div>
            </section>
          </div>

          <div className="restaurant">
            <section className="rest">
              <a href="#">
                <div className="rest_img">
                  <img
                    src="https://b.zmtcdn.com/data/pictures/7/20289837/5e2060ac6e636e1b80a0bdcd48cb64d6.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*"
                    alt=""
                  />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">Lake 360</a>
                <div className="stars">
                  <div className="dinings">
                    <div className="dinings_star lake">
                      <p>2.5</p>
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
                  <p>Italian, </p>
                  <p>Spanish, </p>
                  <p>Beverages </p>
                </div>
                <div className="rest_location">
                  <p>Karma Lakelands, Gurgaon</p>
                </div>
              </div>
            </section>
          </div>

          <div className="restaurant">
            <section className="rest">
              <a href="#">
                <div className="rest_img">
                  <img
                    src="https://b.zmtcdn.com/data/pictures/6/20512286/77a4606cd005fe592e3b554df90e5039_o2_featured_v2.jpg?output-format=webp&fit=around|318.75:231.25&crop=318.75:231.25;*,*"
                    alt=""
                  />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">Railicious</a>
                <div className="stars">
                  <div className="dinings">
                    <div className="dinings_star">
                      <p>3.3</p>
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
                  <p>Chinese, </p>
                  <p>North Indian, </p>
                  <p>Fast Food, </p>
                  <p>Desserts </p>
                </div>
                <div className="rest_location">
                  <p>Gardens Galleria Mall, Sector 38, Noida</p>
                </div>
              </div>
            </section>
          </div>

          <div className="restaurant">
            <section className="rest">
              <a href="#">
                <div className="rest_img">
                  <img
                    src="https://b.zmtcdn.com/data/pictures/9/20223399/f213cc2a1c30b7fc51af0bab24307bab.jpeg?output-format=webp&fit=around|318.75:231.25&crop=318.75:231.25;*,*"
                    alt=""
                  />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">Parikrama - The Revolving Restaurant</a>
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
                  <p>Chinese, </p>
                  <p>Italian </p>
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
                    src="https://b.zmtcdn.com/data/pictures/7/20057817/2f09573d380c5a12511da422b3448099.jpeg?output-format=webp&fit=around|318.75:231.25&crop=318.75:231.25;*,*"
                    alt=""
                  />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">Runway1</a>
                <div className="stars">
                  <div className="dinings">
                    <div className="dinings_star">
                      <p>3.3</p>
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
                  <p>Chinese, </p>
                  <p>Mughal, </p>
                  <p>Oriental </p>
                </div>
                <div className="rest_location">
                  <p>Metro Walk Mall, Rohini, New Delhi</p>
                </div>
              </div>
            </section>
          </div>

          <div className="restaurant">
            <section className="rest">
              <a href="#">
                <div className="rest_img">
                  <img
                    src="https://b.zmtcdn.com/data/pictures/1/20448791/5ce379c2e4f6f32a469f2f660dfc0429.jpg?output-format=webp&fit=around|318.75:231.25&crop=318.75:231.25;*,*"
                    alt=""
                  />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">By the Bay</a>
                <div className="stars">
                  <div className="dinings">
                    <div className="dinings_star">
                      <p>4.1</p>
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
                  <p>Chinese, </p>
                  <p>Street Food, </p>
                  <p>Shake, </p>
                  <p>Beverages </p>
                </div>
                <div className="rest_location">
                  <p>Hudson Lane, New Delhi</p>
                </div>
              </div>
            </section>
          </div>

          <div className="restaurant">
            <section className="rest">
              <a href="#">
                <div className="rest_img">
                  <img
                    src="https://b.zmtcdn.com/data/pictures/1/19582051/88f0b720dd10397f337c8121d210a63a.jpg?output-format=webp&fit=around|318.75:231.25&crop=318.75:231.25;*,*"
                    alt=""
                  />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">Orient Express - Taj Palace</a>
                <div className="stars">
                  <div className="dinings">
                    <div className="dinings_star">
                      <p>4.8</p>
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
                  <p>European , </p>
                  <p>Seafood, </p>

                  <p>Desserts </p>
                </div>
                <div className="rest_location">
                  <p>Taj Palace, Chanakyapuri, New Delhi</p>
                </div>
              </div>
            </section>
          </div>

          <div className="restaurant">
            <section className="rest">
              <a href="#">
                <div className="rest_img">
                  <img
                    src="https://b.zmtcdn.com/data/pictures/1/19298881/4d5e6ccdc7543f6b2ef62487249b4524.jpg?output-format=webp&fit=around|318.75:231.25&crop=318.75:231.25;*,*"
                    alt=""
                  />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">Train Restaurant</a>
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

export default Collection2;
