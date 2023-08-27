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
              src="https://b.zmtcdn.com/data/pictures/2/18617282/b21ac74cac3dd8d57caa73ec1e8fbb4f.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
              alt=""
            />
          </div>
          <div className="image2">
            <div className="photo1">
              <img
                src="https://b.zmtcdn.com/data/pictures/2/18617282/80f946720a6b8c059b059aede10af52b.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*"
                alt=""
              />
            </div>
            <div className="photo1">
              <img
                src="https://b.zmtcdn.com/data/pictures/2/18617282/c0632798401cee1d8354879950044c7d.png?output-format=webp&fit=around|300:273&crop=300:273;*,*"
                alt=""
              />
            </div>
          </div>
          <div className="image3">
            <img
              src="https://b.zmtcdn.com/data/pictures/2/18617282/4e6f82eac382dfada9fd9a5b27617c4e.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*"
              alt=""
            />
          </div>
        </div>

        <div className="restaurantname">Evergreen Sweet House</div>
        <div className="metbex">North Indian, South Indian, Desserts</div>
        <div className="unvan">Green Park, Nev Delhi </div>
        <div className="open">Opens at 10:00 pm</div>
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
                <img src="https://b.zmtcdn.com/data/menus/282/18617282/303b1c6dbe0b6a6426070919b7ca8811.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A" />
                <img
                  src="https://b.zmtcdn.com/data/menus/282/18617282/d2e023566150c88662d192f8980963af.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
                  alt=""
                />
                <img
                  src="https://b.zmtcdn.com/data/menus/282/18617282/ffb50d1cd5b7456b0bfd7a56bd06d7f0.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
                  alt=""
                />
              </div>
              <p>Menu</p>

              <h2 className="h2">Cuisines</h2>
              <div className="cuisines">
                <p> North Indian</p>
                <p>Chinese</p>
                <p>Fast Food</p>
                <p>Continental</p>
                <p>Bar Food</p> <br />
                <p>Italian</p>
                <p>Shake</p>
                <p>Beverages</p>
              </div>
            </div>
            <div className="demo_location">
              <h5>Call</h5>
              <p>+91 9717773316</p>
              <p>+91 9810111360</p>
              <p>+91 1142750077</p>
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
                2522, First Floor, Hudson Lane, Kingsway Camp, Delhi
                University-GTB Nagar, New Delhi
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
            Warm Chocolate Cake, Paneer Pasta, Afghani Murgh Tikka, Chocolate
            Dessert, Makhani Pasta, Hazelnut Frappe
          </p>

          <h2 className="h2">People Say This Place Is Known For</h2>
          <p>
            Different Ambience, Good Pricing, Singer, Relaxed Atmosphere,
            Lightings, Ambience was Super Cool
          </p>

          <h2 className="h2">Avarage Cost</h2>
          <p>₹1,400 for two people (approx.) Without alcohol</p>
          <p>Exclusive of applicable taxes and charges, if any</p>
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
                  <span>Full Bar Available</span>
                </li>
                <li>
                  <i className="fa-regular fa-circle-check"></i>
                  <span>Indoor Seating</span>
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
                  <span>Live Sports Screening</span>
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
                  <span>Takeaway Available</span>
                </li>
                <li>
                  <i className="fa-regular fa-circle-check"></i>
                  <span>Live Entertainment</span>
                </li>
                <li>
                  <i className="fa-regular fa-circle-check"></i>
                  <span>Serves Cocktails</span>
                </li>
                <li>
                  <i className="fa-regular fa-circle-check"></i>
                  <span>Live Music</span>
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
            <p>Warm Chocolate Cake</p>
            <p>Ambience was Super Cool</p>
            <p>Lightings</p>
            <p>Chicken Khurchan</p>
            <p>Relaxed Atmosphere</p> <br />
            <p>Singer</p>
            <p>Good Pricing</p>
            <p>Different Ambience</p>
            <p>Makhani Pasta</p>
            <p>Safe Place</p>
            <p>Chocolate Dessert</p> <br />
            <p>Afghani Murgh Tikka</p>
            <p>Paneer Pasta</p>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
