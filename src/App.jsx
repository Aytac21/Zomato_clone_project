// import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import "./responsive.css";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import Delivery from "./pages/Delivery";
import DiningOut from "./pages/DiningOut";
import NightLife from "./pages/NightLife";
import Login from "./components/Login";
import Signup from "./components/Signup";
import WhoWeAre from "./components/WhoWeAre";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Community from "./components/Community";
import Technology from "./components/Technology";
import Culture from "./components/Culture";
import Company from "./components/Company";
import Article from "./components/Article";
import FeedBack from "./components/FeedBack";
import Profile from "./pages/Profile";
import Collection1 from "./pages/Collection1";
import Collection2 from "./pages/Collection2";
import Collection3 from "./pages/Collection3";
import Collection4 from "./pages/Collection4";
import ZomatoApp from "./pages/ZomatoApp";
import Details from "./pages/Details";
import Error from "./pages/Error";
import Details1 from "./pages/Details1";
import Details2 from "./pages/Details2";
import Details3 from "./pages/Details3";
import Home1 from "./pages/Home1";

import { useEffect, useState } from "react";

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const handleLoginClick = () => {
    setIsLoginOpen(true);
  };

  const handleSignupClick = () => {
    setIsSignupOpen(true);
  };

  const handleCloseModal = () => {
    setIsLoginOpen(false);
    setIsSignupOpen(false);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  });

  const { pathname } = useLocation();
  const route = pathname.split("/")[1];
  const routes = [
    "",
    "delivery",
    "diningout",
    "nightlife",
    "who-we-are",
    "contact",
    "community",
    "company",
    "culture",
    "technology",
    "feedback",
    "profile",
    "collection1",
    "collection2",
    "collection3",
    "collection4",
    "zomatoapp",
    "blog",
    "details",
    "details1",
    "details2",
    "details3",
    "details4",
    "home",
  ];

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home/" element={<Home1 />} />
        <Route path="/delivery/" element={<Delivery />} />
        <Route path="/diningout/" element={<DiningOut />} />
        <Route path="/nightlife/" element={<NightLife />} />
        <Route path="/zomatoapp/" element={<ZomatoApp />} />
        <Route path="/details/:id/" element={<Details />} />

        {/* -------------------------------------------- */}
        <Route path="/who-we-are/" element={<WhoWeAre />} />
        <Route path="/contact/" element={<Contact />} />
        <Route path="/blog/" element={<Blog />} />
        <Route path="/community/" element={<Community />} />
        <Route path="/company/" element={<Company />} />
        <Route path="/culture/" element={<Culture />} />
        <Route path="/technology/" element={<Technology />} />
        <Route path="/feedback/" element={<FeedBack />} />
        <Route path="/blog/:id/" element={<Article />} />
        <Route path="/*" element={<Error />} />
        {/* -------------------------------------------- */}
        <Route path="/profile/" element={<Profile />} />
        <Route path="/collection1/" element={<Collection1 />} />
        <Route path="/collection2/" element={<Collection2 />} />
        <Route path="/collection3/" element={<Collection3 />} />
        <Route path="/collection4/" element={<Collection4 />} />
        <Route path="/details1/" element={<Details1 />} />
        <Route path="/details2/" element={<Details2 />} />
        <Route path="/details3/" element={<Details3 />} />
      </Routes>
      {routes.includes(route) && <Footer />}

      {isLoginOpen && (
        <Login onClose={handleCloseModal} onSignupClick={handleSignupClick} />
      )}

      {isSignupOpen && (
        <Signup onClose={handleCloseModal} onLoginClick={handleLoginClick} />
      )}
    </>
  );
}

export default App;
