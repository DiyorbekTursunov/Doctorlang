import "./next_register.css";
import loginImage from "../../components/images/register__img.png";
import { Link, useNavigate } from "react-router-dom";
import googleIcon from "../../components/images/google_icon.png";
import facebookIcon from "../../components/images/facebook_icon.png";
import mapCitiy_icon from "../../components/images/map_citiy.png";
import userName_icon from "../../components/images/user_name.png";
import twoIcon from '../../components/images/two.png'
import { useState } from "react";

const Next_register = () => {
  const [userName, setuserName] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  async function register(e) {
    e.preventDefault()
    try {
      // fetch to back end
      navigate("/sms_code");
    } catch (error) {
      // error
    }
  }

  return (
    <div className="login__wrapper">
      <div className="container login__container">
        <div className="login__card_perent">
          <div className="login__card">
            <img src={twoIcon} alt="number icon" className="number_icon"/>
            <img src={loginImage} alt="login image" className="login__image" />
            <form className="login__form">
              <h1 className="login__form__heading">Ro’yhatdan o’tish</h1>
              <div className="login__form_email">
                <label htmlFor="username">
                  <img src={mapCitiy_icon} alt="user name" />
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Yashash viloyatingiz"
                />
              </div>
              <div className="login__form_email">
                <label htmlFor="Liveplase">
                  <img src={mapCitiy_icon} alt="phone number" />
                </label>
                <input
                  type="text"
                  name="Liveplase"
                  id="Liveplase"
                  placeholder="Yashash tumaningiz"
                />
              </div>
              <div className="login__form_password">
                <label htmlFor="Age">
                  <img src={userName_icon} alt="password icon" />
                </label>
                <input
                  type="number"
                  name="Age"
                  id="Age"
                  placeholder="Yoshingizni kiritng"
                />
              </div>
              <div className="login__form__ather_platform">
                <button className="login__form__google" type="button">
                  <img src={googleIcon} alt="google icon" />
                </button>
                <button className="login__form__facebook" type="button">
                  <img src={facebookIcon} alt="facebook icon" />
                </button>
              </div>
              <button type="submit" className="login__form__btn" onClick={(e) => register(e)}>
                Keyingisi
              </button>
              <p className="login__form__text">
                Akauntingiz bormi?{" "}
                <Link to={"/login"} className="login__form__text__link">
                  Kirish
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Next_register;
