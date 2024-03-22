import "./login.css";
  import loginImage from "../../components/images/login__image.png";
  import { Link } from "react-router-dom";
  import googleIcon from "../../components/images/google_icon.png";
  import facebookIcon from "../../components/images/facebook_icon.png";
  import emailIcon from "../../components/images/email_icon.png";
  import passwordIcon from "../../components/images/password_icon.png";

const Login = () => {
  return (
    <div className="login__wrapper">
      <div className="container login__container">
        <div className="login__card_perent">
          <div className="login__card">
            <img src={loginImage} alt="login image" className="login__image"/>
            <form className="login__form">
              <h1 className="login__form__heading">Tizimga kirish</h1>
              <div className="login__form_email">
                <label htmlFor="email">
                  <img src={emailIcon} alt="email icon" />
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email yoki telefon raqam"
                />
              </div>
              <div className="login__form_phone_number">
                <label htmlFor="phone_number">
                  <img src={emailIcon} alt="email icon" />
                </label>
                <input
                  type="tel"
                  name="phone_number"
                  id="phone_number"
                  placeholder="email yoki telefon raqam"
                />
              </div>
              <div className="login__form_password">
                <label htmlFor="Password">
                  <img src={passwordIcon} alt="email icon" />
                </label>
                <input
                  type="tel"
                  name="Password"
                  id="Password"
                  placeholder="parol ni kiriting"
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
              <button type="submit" className="login__form__btn">
                Kirish
              </button>
              <p className="login__form__text">
                Akauntingiz yoqmi?{" "}
                <Link to={"/register"} className="login__form__text__link">
                  Ro’yhatdan o’tish
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
