import "./register.css";
import loginImage from "../../components/images/register__img.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import googleIcon from "../../components/images/google_icon.png";
import facebookIcon from "../../components/images/facebook_icon.png";
import userName from "../../components/images/user_name.png";
import phoneNumber from "../../components/images/phone_number.png";
import password from "../../components/images/password.png";
import one_icon from '../../components/images/one.png'
import { useState } from "react";

const Register = ({ setisResgistred }) => {
  const navigate = useNavigate();
  async function register(e) {
    e.preventDefault();
    try {
      // fetch to back end
      setisResgistred(true);
      navigate("/next_register");
    } catch (error) {
      // error
    }
  }

  return (
    <div className="login__wrapper">
      <div className="container login__container">
        <div className="login__card_perent">
          <div className="login__card">
            <img src={one_icon} alt="number_icon" className="number_icon"/>
            <img src={loginImage} alt="login image" className="login__image" />
            <form className="login__form">
              <h1 className="login__form__heading">Ro’yhatdan o’tish</h1>
              <div className="login__form_email">
                <label htmlFor="username">
                  <img src={userName} alt="user name" />
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Isma va Familyangiz"
                />
              </div>
              <div className="login__form_email">
                <label htmlFor="email">
                  <img src={phoneNumber} alt="phone number" />
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Telefon raqamingiz yoki email"
                />
              </div>
              <div className="login__form_password">
                <label htmlFor="Password">
                  <img src={password} alt="password icon" />
                </label>
                <input
                  type="text"
                  name="Password"
                  id="Password"
                  placeholder="Parol o’ylab toping"
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
              <button
                type="submit"
                className="login__form__btn"
                onClick={(e) => register(e)}
              >
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

export default Register;
