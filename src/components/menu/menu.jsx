import { Link, useNavigate } from "react-router-dom";
import "./menu.css";
import globe from "../images/earth__globe.png";
import light_icon from "../images/light_icon.png";
import dark_icon from "../images/dark_icon.png";

import facebook from "../images/facebook.svg";
import instagram from "../images/instagramIcon.svg";
import telegram from "../images/telegram.svg";
import youtube from "../images/youtubeIcon.svg";

const Menu = ({
  isOpen,
  setisOpen,
  languageOpen,
  Language,
  setlanguageOpen,
  SetLanguage,
  Mode,
  setmodeIsOpen,
  modeIsOpen,
  SetDarkMode,
}) => {
  const navigate = useNavigate()

  function toRegister() {
    navigate('/register')
    setisOpen(false)
  }
  function toLogin() {
    navigate('/login')
    setisOpen(false)
  }
  return (
    <div className={`menu__wrapper ${isOpen || "isOpen"}`}>
      <div className="menu">
        <div>
          <ul className="menu__nav__ul">
            <li className="menu__nav__list_item">
              <Link to={"/"}>Kurslar</Link>
            </li>
            <li className="menu__nav__list_item">
              <Link to={"/"}>Lug’atlar</Link>
            </li>
            <li className="menu__nav__list_item">
              <Link to={"/"}>Statistika</Link>
            </li>
          </ul>
          <div className="menu__navbar__functions">
            <div className="menu__navbar__functions__btn">
              <button className="navbar__functions__btn__kirish" onClick={() => toLogin()}>Kirish</button>
              <button className="navbar__functions__btn__Ro’yhatdan_o’tish"onClick={() => toRegister()}>
                ro’yhatdan o’tish
              </button>
            </div>
          </div>
          <div className="menu__social_media">
            <Link to={"/"} target="_blank">
              <img src={instagram} alt="instagram icon" />
            </Link>
            <Link to={""} target="_blank">
              <img src={facebook} alt="facebook icon" />
            </Link>
            <Link to={""} target="_blank">
              <img src={youtube} alt="youtube icon" />
            </Link>
            <Link to={""} target="_blank">
              <img src={telegram} alt="telegram icon" />
            </Link>
          </div>
        </div>
        <div className="menu__functions">
          <div className="menu__navbar__functions__language">
            <div>
              {Language === "uz" && (
                <button
                  className="menu__navbar__language"
                  onClick={() => setlanguageOpen(!languageOpen)}
                >
                  <img src={globe} alt="earth__globe" />
                  <span className="menu__navbar__language__text">uz</span>
                </button>
              )}
              {Language === "eng" && (
                <button
                  className="menu__navbar__language"
                  onClick={() => setlanguageOpen(!languageOpen)}
                >
                  <img src={globe} alt="earth__globe" />
                  <span className="menu__navbar__language__text">eng</span>
                </button>
              )}
              {Language === "ru" && (
                <button
                  className="menu__navbar__language"
                  onClick={() => setlanguageOpen(!languageOpen)}
                >
                  <img src={globe} alt="earth__globe" />
                  <span className="menu__navbar__language__text">ru</span>
                </button>
              )}
            </div>
            {languageOpen && (
              <div>
                {Language !== "uz" && (
                  <button
                    className="menu__navbar__language_two"
                    onClick={() => SetLanguage("uz")}
                  >
                    <img src={globe} alt="earth__globe_two" />
                    <span className="menu__navbar__language__text_two">uz</span>
                  </button>
                )}
                {Language !== "eng" && (
                  <button
                    className="menu__navbar__language_two"
                    onClick={() => SetLanguage("eng")}
                  >
                    <img src={globe} alt="earth__globe" />
                    <span className="menu__navbar__language__text_two">
                      eng
                    </span>
                  </button>
                )}
                {Language !== "ru" && (
                  <button
                    className="menu__navbar__language_two"
                    onClick={() => SetLanguage("ru")}
                  >
                    <img src={globe} alt="earth__globe_two" />
                    <span className="menu__navbar__language__text_two">ru</span>
                  </button>
                )}
              </div>
            )}
          </div>
          <div className="">
            <div className="menu__navbar__mode">
              {Mode === "light" ? (
                <button
                  className="menu__navbar__mode__light"
                  onClick={() => setmodeIsOpen(!modeIsOpen)}
                >
                  <img src={light_icon} alt="mode light" />
                  <span className="menu__navbar__mode__light__text">light</span>
                </button>
              ) : (
                <button
                  className="menu__navbar__mode__dark"
                  onClick={() => setmodeIsOpen(!modeIsOpen)}
                >
                  <img src={dark_icon} alt="mode dark" />
                  <span className="menu__navbar__mode__dark__text">dark</span>
                </button>
              )}
            </div>
            {modeIsOpen && (
              <div className="menu__navbar__mode_two">
                {Mode === "light" ? (
                  <button
                    className="menu__navbar__mode__dark_two"
                    onClick={() => SetDarkMode()}
                  >
                    <img src={dark_icon} alt="mode dark_two" />
                    <span className="menu__navbar__mode__dark__text">dark</span>
                  </button>
                ) : (
                  <button
                    className="menu__navbar__mode__light_two"
                    onClick={() => SetDarkMode()}
                  >
                    <img src={light_icon} alt="mode light_two" />
                    <span className="menu__navbar__mode__light__text">
                      light
                    </span>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
