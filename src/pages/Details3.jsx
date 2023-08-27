// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Details() {
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
            <div className="search-city">
              <i className="fa-solid fa-location-dot"></i>
              <input
                type="text"
                placeholder="Bakı, 28 may, Sahil, Nərimanov |"
              />
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
        <div className="photos">
          <div className="image1">
            <img
              src="https://b.zmtcdn.com/data/pictures/5/20361165/dda83fdeb29bfb428f4cefe7b86c9bb2.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
              alt=""
            />
          </div>
          <div className="image2">
            <div className="photo1">
              <img
                src="https://b.zmtcdn.com/data/pictures/5/20361165/687de4c70165378770f77d59ceb68455.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*"
                alt=""
              />
            </div>
            <div className="photo1">
              <img
                src="https://b.zmtcdn.com/data/pictures/5/20361165/981bbfca04659366abf2361ec867ca9f.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*"
                alt=""
              />
            </div>
          </div>
          <div className="image3">
            <img
              src="https://b.zmtcdn.com/data/pictures/5/20361165/3cb4872015c041b2e41b3a2bcb9862b8.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
              alt=""
            />
          </div>
        </div>

        <div className="restaurantname">Nathu's Sweets</div>
        <div className="metbex">Mithai, South Indian, Chinese</div>
        <div className="unvan">Bengali Market, Mandi House</div>
        <div className="open">Opens at 09:00 pm</div>
        <div className="close">Closed at 21:00 am</div>

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
                <img src="https://b.zmtcdn.com/data/menus/165/20361165/63c8f64f7e8a5e99edcd0700b2c290f6.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A" />
                <img
                  src="https://b.zmtcdn.com/data/menus/165/20361165/21bda375b03a75962e0b8dfb03576641.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
                  alt=""
                />
              </div>
              <p>Menu</p>
              <h2 className="h2">Cuisines</h2>
              <div className="cuisines">
                <p>North İndian</p>
                <p>Chinese</p>
                <p>Fast Food</p>
                <p>Desserts</p>
                <p>Beverages</p>
              </div>
            </div>
            <div className="demo_location">
              <h5>Call</h5>
              <p>+91 9354736076</p>
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
                SCO 19, City Center, Leisure Valley Road, Sector 29, Gurgaon
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
            Soya Malai Chaap, Sweet Corn Soup, Cheesecake, Paneer Butter Masala,
            Mushroom, Kadhai Paneer
          </p>

          <h2 className="h2">People Say This Place Is Known For</h2>
          <p>
            Family Restaurant, Customizable Dishes, Good Wifi, Theme, Variety of
            Pizza, Beautiful Ambience
          </p>

          <h2 className="h2">Avarage Cost</h2>
          <p>₹1,000 for two people (approx.)</p>
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
                  <span>Home Delivery</span>
                </li>
                <li>
                  <i className="fa-regular fa-circle-check"></i>
                  <span>Vegetarian Only</span>
                </li>
                <li>
                  <i className="fa-regular fa-circle-check"></i>
                  <span>Desserts and Bakes</span>
                </li>
                <li>
                  <i className="fa-regular fa-circle-check"></i>
                  <span>Indoor Seating</span>
                </li>
              </ul>
            </div>

            <div className="info1">
              <ul>
                <li>
                  <i className="fa-regular fa-circle-check"></i>
                  <span>Takeaway Available</span>
                </li>
                <li>
                  <i className="fa-regular fa-circle-check"></i>
                  <span>Romantic Dining</span>
                </li>
                <li>
                  <i className="fa-regular fa-circle-check"></i>
                  <span>Rooftop</span>
                </li>
                <li>
                  <i className="fa-regular fa-circle-check"></i>
                  <span>Live Music</span>
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
            <p>Soya Malai Chaap</p>
            <p>Sweet Corn Soup</p>
            <p>Cheesecake</p>
            <p>Paneer Butter Masala</p>
            <br />
            <p>Mushroom</p>
            <p>Kadhai Paneer</p>
            <p>Family Restaurant</p>
            <p>Customizable Dishes</p>
            <p>Good Wifi</p>
            <br />
            <p>Theme</p>
            <p>Variety of Pizza</p>
            <p>Beautiful Ambience</p>
          </div>

          <div className="h2">Featured In</div>
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
                  <div className="line det"></div>
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
                <p>Japanese, Sushi, Asian, Oriental, Beverages</p>
              </div>
            </div>

            <div className="sponsor">
              <div className="sponsor_img">
                <img
                  src="https://b.zmtcdn.com/data/pictures/9/20626219/4136c664be0b8194e6ffd64788447f50_featured_v2.jpg?output-format=webp"
                  alt=""
                />
              </div>
              <div className="sponsor_detail">
                <h4>Bean & The Bear</h4>
                <div className="stars">
                  <div className="dinings">
                    <div className="dinings_star">
                      <p>3.1</p>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
