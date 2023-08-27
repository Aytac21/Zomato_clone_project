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
          <img src="https://b.zmtcdn.com/data/collections/1611ede1a60abd5ac7240ec0329942e6_1688041059.jpg?fit=around|858.4000000000001:256&crop=858.4000000000001:256;*,*" alt="" />
          <div className="unique_title">
            <h1>Romantic Dining Places</h1>
            <h6>
            Create delightful connections and memories at these aesthetically-pleasing yet cosy places.
            </h6>
            <p>13 Places</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="restaurants">
          <div className="restaurant">
            <section className="rest">
              <a href="#">
                <div className="rest_img">
                  <img src="https://b.zmtcdn.com/data/pictures/9/20284969/7960c272c375100588ae76d41631b648.jpeg?fit=around|318.75:231.25&crop=318.75:231.25;*,*" alt="" />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">Gangnam Restaurant</a>
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
                  <p>Korean, </p>
                  <p>Desserts, </p>
                  <p>Beverages </p>
                </div>
                <div className="rest_location">
                  <p>Majnu ka Tila , New Delhi</p>
                </div>
              </div>
            </section>
          </div>

          <div className="restaurant">
            <section className="rest">
              <a href="#">
                <div className="rest_img">
                  <img src="https://b.zmtcdn.com/data/pictures/2/19012642/d9d887b5f604f74de74634166c3d06c8.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*" alt="" />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">Dalgrak</a>
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
                  <p>Korean, </p>
                  <p>Chinese, </p>
                  <p>Fast Food, </p>
                  <p>Desserts </p>
                </div>
                <div className="rest_location">
                  <p>Lajpat Nagar 4, New Delhi</p>
                </div>
              </div>
            </section>
          </div>

          <div className="restaurant">
            <section className="rest">
              <a href="#">
                <div className="rest_img">
                  <img src="https://b.zmtcdn.com/data/pictures/6/18857856/19615a48cc305a0baa7ba8ad354e76bc.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*" alt="" />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">Miso</a>
                <div className="stars">
                  <div className="dinings">
                    <div className="dinings_star lake">
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
                  <p>Korean, </p>
                  <p>Asian, </p>
                  <p>Japanese, </p>
                  <p>Salad </p>
                </div>
                <div className="rest_location">
                  <p>Global Foyer Mall, Golf Course Road</p>
                </div>
              </div>
            </section>
          </div>

          <div className="restaurant">
            <section className="rest">
              <a href="#">
                <div className="rest_img">
                  <img src="https://b.zmtcdn.com/data/pictures/4/19567354/2879566e8fd8ba4373a200b3341f01cf.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*" alt="" />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">Kori's</a>
                <div className="stars">
                  <div className="dinings">
                    <div className="dinings_star">
                      <p>4.5</p>
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
                  <p>Fast Food, </p>
                  <p>Chinese, </p>
                  <p>Desserts </p>
                  <p>North Indian, </p>
                </div>
                <div className="rest_location">
                  <p>M Block Market, Greater Kailash 1 </p>
                </div>
              </div>
            </section>
          </div>

          <div className="restaurant">
            <section className="rest">
              <a href="#">
                <div className="rest_img">
                  <img src="https://b.zmtcdn.com/data/pictures/2/18715352/b089e7c3dee1913a0d7606f8024c6113.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*" alt="" />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">Busan Korean Restaurant</a>
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
                      <p>4.1</p>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="dining deliv">
                      <p>DELIVERY</p>
                    </div>
                  </div>
                </div>

                <div className="countries">
                  <p>Korean, </p>
                  <p>Asian, </p>
                  <p>Seafood, </p>
                  <p>Beverages </p>
                </div>
                <div className="rest_location">
                  <p>Majnu ka Tila , New Delhi</p>
                </div>
              </div>
            </section>
          </div>


          <div className="restaurant">
            <section className="rest">
              <a href="#">
                <div className="rest_img">
                  <img src="https://b.zmtcdn.com/data/pictures/3/2423/e142865756b38cdb53d336f67cd2fa5c.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*" alt="" />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">Master Koii's</a>
                <div className="stars">
                  <div className="dinings">
                    <div className="dinings_star">
                      <p>4.6</p>
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
                  <p>North Indian, </p>
                  <p>Chinese, </p>
                  <p>Mughal, </p>
                  <p>Oriental </p>
                </div>
                <div className="rest_location">
                  <p>Sushant Lok, Gurgaon</p>
                </div>
              </div>
            </section>
          </div>

          <div className="restaurant">
            <section className="rest">
              <a href="#">
                <div className="rest_img">
                  <img src="https://b.zmtcdn.com/data/pictures/2/18291202/4a0fecc62bd00a341cbaa919e63a69d5.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*" alt="" />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">Chungdam Premium Korean </a>
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
                      <p>4.3</p>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="dining deliv">
                      <p>DELIVERY</p>
                    </div>
                  </div>
                </div>
                <div className="countries">
                  <p>Korean, </p>
                  <p>Sushi, </p>
                  <p>Japanese </p>
                </div>
                <div className="rest_location">
                  <p>Global Foyer Mall, Golf Course Road</p>
                </div>
              </div>
            </section>
          </div>

          <div className="restaurant">
            <section className="rest">
              <a href="#">
                <div className="rest_img">
                  <img src="https://b.zmtcdn.com/data/pictures/5/2675/4b40c17debde31ac307a550f5f43278a.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*" alt="" />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">Hahn's Kitchen</a>
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
                  <p>Korean , </p>
                  <p>Sushi, </p>
                  <p>BBQ, </p>

                  <p>Coffee </p>
                </div>
                <div className="rest_location">
                  <p>DLF Horizon Center, Gurgaon</p>
                </div>
              </div>
            </section>
          </div>

          <div className="restaurant">
            <section className="rest">
              <a href="#">
                <div className="rest_img">
                  <img src="https://b.zmtcdn.com/data/pictures/7/8627/bce86f99be5cd3bb5ee66593ad5770c5.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*" alt="" />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">The Bibimbab - Myung Ga</a>
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
                  <p>Korean </p>
                </div>
                <div className="rest_location">
                  <p>South Point Mall, Golf Course Road</p>
                </div>
              </div>
            </section>
          </div>
        
          <div className="restaurant">
            <section className="rest">
              <a href="#">
                <div className="rest_img">
                  <img src="https://b.zmtcdn.com/data/pictures/3/2693/072ffe5388f108346aec59eb7b928303.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*" alt="" />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">Cafe at Korean Cultural Center</a>
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
                </div>, 


                <div className="countries">
                  <p>Cafe , </p>
                  <p>Korean </p>
                </div>
                <div className="rest_location">
                  <p>Lajpat Nagar 4, New Delhi</p>
                </div>
              </div>
            </section>
          </div>

          <div className="restaurant">
            <section className="rest">
              <a href="#">
                <div className="rest_img">
                  <img src="https://b.zmtcdn.com/data/pictures/9/304239/92330164e9c9b8ffd89e9d98979ddea6.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*" alt="" />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">The For'est</a>
                <div className="stars">
                  <div className="dinings">
                    <div className="dinings_star">
                      <p>4.3</p>
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
                  <img src="https://b.zmtcdn.com/data/pictures/0/19585490/5d42c371de14919fa7f9baac19ffa064.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*" alt="" />
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

          <div className="restaurant">
            <section className="rest">
              <a href="#">
                <div className="rest_img">
                  <img src="https://b.zmtcdn.com/data/pictures/8/3258/53255d275cdb69bac909248f0e0f4ec2.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*" alt="" />
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
