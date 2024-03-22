import { Link } from "react-router-dom";
import "./footer.css";
import logo from "../images/logo.svg";
import youtube__logo from "../images/youtube.svg";
import facebook__logo from "../images/facebook.svg";
import instagram__logo from "../images/instagram.svg";
import telegram__logo from "../images/telegram.svg";
import image from "../images/image.png";
import footer__image from '../images/footer__image.png'

const Footer = () => {
  return (
    <div className="footer__wrapper">
      <div className="container footer__contaier">
        <div className="footer__logo__card">
          <Link to={"/"} className="navbar__logo">
            <img src={logo} alt="site logo" />
            <span className="navbar__logo__text">DoctorLang</span>
          </Link>
          <Link to={"/"} target="_blank" className="footer__logo__title__email">
            <span>DoctorLang@gmail.com</span>
          </Link>
          <p className="footer__logo__title">
            Toshkent shahar chilonzor tumani, Mirobod kochasi 12-uy.Mo’ljal NBU
            bank ro’parasida
          </p>
        </div>
        <div className="footer__card">
          <div className="footer__card__items">
            <div className="footer__card__items_ul__perent">
              <ul className="footer__card__items_ul">
                <li className="footer__card__items_li__head">Platforma</li>
                <li className="footer__card__items_li"> <Link to={'/'}>Kurslar</Link></li>
                <li className="footer__card__items_li"> <Link to={'/'}>Statistika</Link></li>
                <li className="footer__card__items_li"> <Link to={'/'}>Lug’atlar</Link></li>
              </ul>
              <ul className="footer__card__items_ul">
                <li className="footer__card__items_li__head">Ma’lumot</li>
                <li className="footer__card__items_li"> <Link to={'/'}>Asosiy</Link></li>
                <li className="footer__card__items_li"> <Link to={'/'}>Biz haqimizda</Link></li>
                <li className="footer__card__items_li"> <Link to={'/'}>Maxfiylik siyosati</Link></li>
              </ul>
              <div className="footer__card__logos">
                <Link className="instagram__logo">
                  <img
                    src={instagram__logo}
                    alt="instagram logo"
                    className="instagram__logo__image"
                  />
                </Link>
                <Link className="telegram__logo">
                  <img
                    src={telegram__logo}
                    alt="telegram logo"
                    className="telegram__logo__image"
                  />
                </Link>
                <Link className="facebook__logo">
                  <img
                    src={facebook__logo}
                    alt="facebook logo"
                    className="facebook__logo__image"
                  />
                </Link>
                <Link className="youtube__logo">
                  <img
                    src={youtube__logo}
                    alt="youtube logo"
                    className="youtube__logo__image"
                  />
                </Link>
              </div>
            </div>
            <div className="footer__card__about">
              <div className="footer__card__about__title">
                <p>
                  Copyright 2022-2023 by YashnarTech. All Rights Reserved.
                  DoctorLang is Powered by YashnarTech.
                </p>
              </div>
              <img
                src={image}
                alt="image"
                className="footer__card__about__image"
              />
            </div>
          </div>
        </div>
        <img src={footer__image} alt="footer__image" className="footer__image" />
      </div>
    </div>
  );
};

export default Footer;
