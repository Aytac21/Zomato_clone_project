import { useState } from "react";
function Collection4() {
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
            src="https://b.zmtcdn.com/data/collections/6607ee3014b9a51ba91d73aee7774a0e_1679127320.jpg?fit=around|858.4000000000001:256&crop=858.4000000000001:256;*,*"
            alt=""
          />
          <div className="unique_title">
            <h1>Great Cafes</h1>
            <h6>
              Pamper yourself with a French croissant or add an Italian flair to
              the sandwich! Here’s our handpicked list of awesome cafes in town.
            </h6>
            <p>21 Places</p>
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
                    src="https://b.zmtcdn.com/data/pictures/0/18261150/d06dcd12f248440426077a262a75b208.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*"
                    alt=""
                  />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">Houz Cafe Bar</a>
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
                  <img
                    src="https://b.zmtcdn.com/data/pictures/9/18765539/4982f90ed8c96116642deb38843031b5.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*"
                    alt=""
                  />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">House of Migo</a>
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
                  <img
                    src="https://b.zmtcdn.com/data/pictures/5/20068265/1c0ddf7bdfafc63ae409f07dc0dbe51a.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*"
                    alt=""
                  />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">Kakapo</a>
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
                  <img
                    src="https://b.zmtcdn.com/data/pictures/5/19613325/f7a2b81bb68ca66588488d49f2d2bd3d.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*"
                    alt=""
                  />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">Music & Mountains - Hillside</a>
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
                  <img
                    src="https://b.zmtcdn.com/data/pictures/6/18562836/f5cf30a33f5a788c28ebf88ceedaf178.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*"
                    alt=""
                  />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">Roastery Coffee House</a>
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
                  <img
                    src="https://b.zmtcdn.com/data/pictures/7/19704317/ca1227129422dcb94c078ebb5917d417.jpeg?fit=around|318.75:231.25&crop=318.75:231.25;*,*"
                    alt=""
                  />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">Plum By Bent Chair</a>
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
                  <img
                    src="https://b.zmtcdn.com/data/reviews_photos/77c/320819ac3c6187c9d6b598bf2480e77c_1563003398.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*"
                    alt=""
                  />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">Bellagio</a>
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
                  <img
                    src="https://b.zmtcdn.com/data/pictures/3/19470493/ede5f2fc1d47c19106f160b49675156f.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*"
                    alt=""
                  />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">Tera Vita - Trattoria & Bar</a>
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
                  <img
                    src="https://b.zmtcdn.com/data/pictures/4/18671714/730a84822572e47ad99a11eb50da923e.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*"
                    alt=""
                  />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">Cafe De Flora</a>
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
                  <img
                    src="https://b.zmtcdn.com/data/pictures/2/18551422/eaa2edda2df0f7ba30008bf91967554d.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*"
                    alt=""
                  />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">Maruchi</a>
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
                  <img
                    src="https://b.zmtcdn.com/data/pictures/1/18733131/e66542f1eed0a6065748c790a76c5450.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*"
                    alt=""
                  />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">Under The Neem</a>
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
                  <img
                    src="https://b.zmtcdn.com/data/pictures/3/18424903/b6e4da58be569819ef0e089d0ac28fd9.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*"
                    alt=""
                  />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">Diggin</a>
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
                  <img
                    src="https://b.zmtcdn.com/data/pictures/4/307374/63de587a7ae77c8dbb2717fa3ba3aecd.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*"
                    alt=""
                  />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">Cafe Wink</a>
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
                  <img
                    src="https://b.zmtcdn.com/data/pictures/6/20332896/246f189113a464e29d489cfa7c41a57c.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*"
                    alt=""
                  />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">Fig At Museo</a>
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
                  <img
                    src="https://b.zmtcdn.com/data/pictures/6/18341926/c47a35b5523e9c3a9d687eaee8841b77.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*"
                    alt=""
                  />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">Spezia Bistro</a>
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
                  <img
                    src="https://b.zmtcdn.com/data/pictures/8/18624988/598809611206ef75acf3105c17871740.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*"
                    alt=""
                  />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">Bougie</a>
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
                  <img
                    src="https://b.zmtcdn.com/data/pictures/8/18582328/a5fbe5a9e8749c8ccee2dac1f8ca2ea9.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*"
                    alt=""
                  />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">The Grammar Room</a>
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
                  <img
                    src="https://b.zmtcdn.com/data/reviews_photos/6ae/707280d10478dd53ab55e3365fcff6ae_1530523395.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*"
                    alt=""
                  />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">My Secret Place</a>
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
                  <img
                    src="https://b.zmtcdn.com/data/reviews_photos/ba1/1b29123be618f8afd61c941553cc6ba1_1514375259.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*"
                    alt=""
                  />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">OLLY - Olive's All Day Cafe</a>
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
                  <img
                    src="https://b.zmtcdn.com/data/pictures/1/19794321/88051e8c7862e3c67d50f0a9adee25a9.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*"
                    alt=""
                  />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">Blunch Cafe & Patisserie</a>
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
                  <img
                    src="https://b.zmtcdn.com/data/pictures/4/18675554/2a2a1eb565234052d9e73d25ad43dc8a.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*"
                    alt=""
                  />
                </div>
              </a>
              <div className="rest_details">
                <a href="#">Deja Brew</a>
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

export default Collection4;
