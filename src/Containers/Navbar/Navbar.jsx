import { React, useState, useEffect } from "react";
import logo from "../../assets/networkbrain-white.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import "./Navbar.css";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [active, setActive] = useState("");

  const closeHandler = async () => {
    setActive("");
    await delay(800);
    setToggleMenu(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive("");
      toggleMenu && setActive("active");
    }, 50);
    return () => clearTimeout(timer);
  }, [toggleMenu]);

  return (
    <nav className="app__navbar ">
      <div className="app__navbar-logo">
        <img src={logo} alt="logo" />
      </div>

      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">about</a>
        </li>
        <li className="p__opensans">
          <a href="#">GPT-3</a>
        </li>
        <li className="p__opensans">
          <a href="#">OUR AI</a>
        </li>
      </ul>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={34}
          onClick={() => setToggleMenu(true)}
          className="M"
        />
        {toggleMenu && (
          <div className={`app__navbar-smallscreen_overlay ${active}`}>
            <FaTimes
              color="#FFF"
              fontSize={34}
              className="overlay__close"
              onClick={closeHandler}
            />
            <ul className="app__navbar-links_smallscreen">
              <li className="p__opensans">
                <a href="#home">Home</a>
              </li>
              <li className="p__opensans">
                <a href="#about">about</a>
              </li>
              <li className="p__opensans">
                <a href="#">GPT-3</a>
              </li>
              <li className="p__opensans">
                <a href="#">OUR AI</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
