import "./sms_code.css";
import loginImage from "../../components/images/send_message.png";
import { Link } from "react-router-dom";
import googleIcon from "../../components/images/google_icon.png";
import facebookIcon from "../../components/images/facebook_icon.png";
import userName_icon from "../../components/images/user_name.png";
import phoneNumber_icon from "../../components/images/phone_number.png";
import password_icon from "../../components/images/password.png";
import threeIcon from '../../components/images/three.png'
import { useRef, useState } from "react";

const Sms_code = () => {
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const input4 = useRef();
  const input5 = useRef();
  async function register() {
    const code = {
      values:
        input1.current.value +
        input2.current.value +
        input3.current.value +
        input4.current.value +
        input5.current.value,
    };
    console.log(code);
  }
  return (
    <div className="login__wrapper">
      <div className="container login__container">
        <div className="login__card_perent">
          <div className="login__card">
            <img src={threeIcon} alt="number icon" className="number_icon"/>
            <img src={loginImage} alt="login image" className="login__image" />
            <form className="register__form">
              <p className="register_title">
                Hurmatli mijoz sizning email ingizga yoki telefoningizga sms kod
                yubordik. Iltimos shuni kiriting
              </p>
              <div className="register_inputs">
                <div className="register_input">
                  <input
                    autoFocus
                    type="text"
                    name=""
                    id=""
                    ref={input1}
                    onChange={() => {
                      input1.current.value = input1.current.value.substring(
                        input1.current.value.length - 1
                      );
                      input2.current.focus();
                    }}
                  />
                </div>
                <div className="register_input">
                  <input
                    type="text"
                    name=""
                    id=""
                    ref={input2}
                    onChange={() => {
                      input2.current.value = input2.current.value.substring(
                        input2.current.value.length - 1
                      );
                      input3.current.focus();
                    }}
                  />
                </div>
                <div className="register_input">
                  <input
                    type="text"
                    name=""
                    id=""
                    ref={input3}
                    onChange={() => {
                      input3.current.value = input3.current.value.substring(
                        input3.current.value.length - 1
                      );
                      input4.current.focus();
                    }}
                  />
                </div>
                <div className="register_input">
                  <input
                    type="text"
                    name=""
                    id=""
                    ref={input4}
                    onChange={() => {
                      input4.current.value = input4.current.value.substring(
                        input4.current.value.length - 1
                      );
                      input5.current.focus();
                    }}
                  />
                </div>
                <div className="register_input">
                  <input
                    type="text"
                    name=""
                    id=""
                    ref={input5}
                    onChange={() => {
                      input5.current.value = input5.current.value.substring(
                        input5.current.value.length - 1
                      );
                      input1.current.focus();
                    }}
                  />
                </div>
              </div>
              <button
                type="button"
                className="login__form__btn"
                onClick={() => register()}
              >
                Tugatish
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

export default Sms_code;
