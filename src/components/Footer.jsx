import { Link } from "react-router-dom";
import i18n from "./../pages/i18n";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <footer className="">
        <div className="footerdiv container-ay">
          <div className="footer-zomato-img">
            <Link to={"home/"}>
              <img
                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
                alt=""
              />
            </Link>
          </div>
          <div className="footer-about-div">
            <ul className="footer-div-column">
              <li>
                <h6>{t("ABOUTZOMATO")}</h6>
              </li>
              <li>
                <Link to={"/who-we-are"}>{t("page1")}</Link>
              </li>
              <li>
                <Link to={"/blog"}>{t("page2")}</Link>
              </li>
              <li>
                <a href="">{t("WorkWithUs")}</a>
              </li>
              <li>
                <a href="">{t("InvestorRelations")}</a>
              </li>
              <li>
                <a href="">{t("ReportFraud")}</a>
              </li>
              <li>
                <Link to={"/contact"}>{t("ContactUs")}</Link>
              </li>
            </ul>
            <ul className="footer-div-column">
              <li>
                <h6>Zomaverse</h6>
              </li>
              <li>
                <a href="/home">Zomato</a>
              </li>
              <li>
                <a href="https://blinkit.com/">Blinkit</a>
              </li>
              <li>
                <a href="https://www.feedingindia.org/">Feeding India</a>
              </li>
              <li>
                <a href="https://www.hyperpure.com/">Hyperpure</a>
              </li>
            </ul>
            <ul className="footer-div-column">
              <li>
                <h6>{t("ForRestaurants")}</h6>
              </li>
              <li>
                <a href="">{t("PartnerWithUs")}</a>
              </li>
              <li>
                <a href="https://play.google.com/store/apps/details?id=com.application.services.partner&hl=en_IN&gl=US">
                  {t("AppsForYou")}
                </a>
              </li>
              <li>
                <h6>{t("ForEnterprises")}</h6>
              </li>
              <li>
                <a href="">{t("ZomatoForEnterprise")}</a>
              </li>
            </ul>
            <ul className="footer-div-column">
              <li>
                <h6>{t("LearnMore")}</h6>
              </li>
              <li>
                <a href="">{t("Privacy")}</a>
              </li>
              <li>
                <a href="">{t("Security")}</a>
              </li>
              <li>
                <a href="">{t("Terms")}</a>
              </li>
              <li>
                <a href="">{t("Sitemap")}</a>
              </li>
            </ul>
            <ul className="footer_social">
              <li>
                <h6>{t("SOCIALLINKS")}</h6>
              </li>
              <li className="footer-icons">
                <a href="https://www.linkedin.com/company/zomato/?originalSubdomain=in">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/zomato/">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://twitter.com/zomato">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="https://www.youtube.com/zomato">
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a href="https://www.facebook.com/zomato">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
                    alt=""
                  />
                </a>
                <a href="">
                  <img
                    src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-hr">
            <hr />
            <p>{t("footerdesc")}</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
