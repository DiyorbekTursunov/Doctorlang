import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../images/logo.svg";
import globe from "../images/earth__globe.png";
import light_icon from "../images/light_icon.png";
import dark_icon from "../images/dark_icon.png";
import menu_icon from "../images/menu.png";
import close_icon from "../images/close.svg";
import Menu from "../menu/menu";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const [modeIsOpen, setmodeIsOpen] = useState(false);
  const mode = localStorage.getItem("mode");
  const [Mode, setMode] = useState(mode ? mode : "light");

  const localStoragelanguage = localStorage.getItem("language");
  const [Language, setLanguage] = useState(
    localStoragelanguage ? localStoragelanguage : "uz"
  );
  const [languageOpen, setlanguageOpen] = useState(false);

  function SetDarkMode() {
    if (Mode === "light") {
      setMode("dark");
      setmodeIsOpen(!modeIsOpen);
      setisOpen(false);
    } else {
      setMode("light");
      setmodeIsOpen(!modeIsOpen);
      setisOpen(false);
    }
  }

  function SetLanguage(lang) {
    if (lang === "uz") {
      setLanguage("uz");
      setlanguageOpen(!languageOpen);
      setisOpen(false);
    } else if (lang === "ru") {
      setLanguage("ru");
      setlanguageOpen(!languageOpen);
      setisOpen(false);
    } else {
      setLanguage("eng");
      setlanguageOpen(!languageOpen);
      setisOpen(false);
    }
  }

  function DarkMode() {
    document.querySelector("body").setAttribute("data-theme", Mode);
  }

  useEffect(() => {
    localStorage.setItem("mode", Mode);
    DarkMode();
  }, [Mode]);

  useEffect(() => {
    localStorage.setItem("language", Language);
  }, [Language]);

  return (
    <>
      <div className="main__navbar__wrapper">
        <div className="container navbar__container">
          <div className="navbar">
            <div className="navbar__wrapper">
              <Link to={"/"} className="navbar__logo">
                <img src={logo} alt="site logo" />
                <span className="navbar__logo__text">DoctorLang</span>
              </Link>
              <nav className="nav">
                <ul className="nav__ul">
                  <li className="nav__list_item">
                    <Link to={"/kurslar"}>Kurslar</Link>
                  </li>
                  <li className="nav__list_item">
                    <Link to={"/"}>Lug’atlar</Link>
                  </li>
                  <li className="nav__list_item">
                    <Link to={"/"}>Statistika</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="navbar__functions">
              <div className="navbar__functions__language">
                <div>
                  {Language === "uz" && (
                    <button
                      className="navbar__language"
                      onClick={() => setlanguageOpen(!languageOpen)}
                    >
                      <img src={globe} alt="earth__globe" />
                      <span className="navbar__language__text">uz</span>
                    </button>
                  )}
                  {Language === "eng" && (
                    <button
                      className="navbar__language"
                      onClick={() => setlanguageOpen(!languageOpen)}
                    >
                      <img src={globe} alt="earth__globe" />
                      <span className="navbar__language__text">eng</span>
                    </button>
                  )}
                  {Language === "ru" && (
                    <button
                      className="navbar__language"
                      onClick={() => setlanguageOpen(!languageOpen)}
                    >
                      <img src={globe} alt="earth__globe" />
                      <span className="navbar__language__text">ru</span>
                    </button>
                  )}
                </div>
                {languageOpen && (
                  <div>
                    {Language !== "uz" && (
                      <button
                        className="navbar__language_two"
                        onClick={() => SetLanguage("uz")}
                      >
                        <img src={globe} alt="earth__globe_two" />
                        <span className="navbar__language__text_two">uz</span>
                      </button>
                    )}
                    {Language !== "eng" && (
                      <button
                        className="navbar__language_two"
                        onClick={() => SetLanguage("eng")}
                      >
                        <img src={globe} alt="earth__globe" />
                        <span className="navbar__language__text_two">eng</span>
                      </button>
                    )}
                    {Language !== "ru" && (
                      <button
                        className="navbar__language_two"
                        onClick={() => SetLanguage("ru")}
                      >
                        <img src={globe} alt="earth__globe_two" />
                        <span className="navbar__language__text_two">ru</span>
                      </button>
                    )}
                  </div>
                )}
              </div>
              <div className="">
                <div className="navbar__mode">
                  {Mode === "light" ? (
                    <button
                      className="navbar__mode__light"
                      onClick={() => setmodeIsOpen(!modeIsOpen)}
                    >
                      <img src={light_icon} alt="mode light" />
                      <span className="navbar__mode__light__text">light</span>
                    </button>
                  ) : (
                    <button
                      className="navbar__mode__dark"
                      onClick={() => setmodeIsOpen(!modeIsOpen)}
                    >
                      <img src={dark_icon} alt="mode dark" />
                      <span className="navbar__mode__dark__text">dark</span>
                    </button>
                  )}
                </div>
                {modeIsOpen && (
                  <div className="navbar__mode_two">
                    {Mode === "light" ? (
                      <button
                        className="navbar__mode__dark_two"
                        onClick={() => SetDarkMode()}
                      >
                        <img src={dark_icon} alt="mode dark_two" />
                        <span className="navbar__mode__dark__text">dark</span>
                      </button>
                    ) : (
                      <button
                        className="navbar__mode__light_two"
                        onClick={() => SetDarkMode()}
                      >
                        <img src={light_icon} alt="mode light_two" />
                        <span className="navbar__mode__light__text">light</span>
                      </button>
                    )}
                  </div>
                )}
              </div>
              <div className="navbar__functions__btn">
                <Link className="navbar__functions__btn__kirish" to={"/login"}>
                  Kirish
                </Link>
                <Link
                  to={"/register"}
                  className="navbar__functions__btn__Ro’yhatdan_o’tish"
                >
                  ro’yhatdan o’tish
                </Link>
              </div>
            </div>
            {isOpen ? (
              <button
                className="navbar__menu_icon"
                onClick={() => setisOpen(!isOpen)}
              >
                <img src={close_icon} alt="close_icon" />
              </button>
            ) : (
              <button
                className="navbar__menu_icon"
                onClick={() => setisOpen(!isOpen)}
              >
                <img src={menu_icon} alt="menu_icon" />
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="transition">
        <Menu
          SetDarkMode={SetDarkMode}
          isOpen={isOpen}
          setisOpen={setisOpen}
          Language={Language}
          Mode={Mode}
          SetLanguage={SetLanguage}
          languageOpen={languageOpen}
          modeIsOpen={modeIsOpen}
          setlanguageOpen={setlanguageOpen}
          setmodeIsOpen={setmodeIsOpen}
        />
      </div>
    </>
  );
};

export default Navbar;
