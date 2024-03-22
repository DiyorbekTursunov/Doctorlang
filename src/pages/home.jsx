import "./home.css";
import headerImage from "../components/images/header__image.png";
import videoLesson from "../components/images/video__lesson.png";
import money from "../components/images/money.png";
import teacher from "../components/images/teacher.png";
import personalGoals from "../components/images/personal__goals.png";
import oneIcon from "../components/images/one.png";
import two from "../components/images/two.png";
import three from "../components/images/three.png";
import teamBro from "../components/images/team__bro.png";
import user__image from "../components/images/user.png";

const Home = () => {
  return (
    <div className="main__wrapper">
      <div className="header__wrapper">
        <div className="header__container container">
          <header className="header">
            <div className="header__item__title__wrapper">
              <h3 className="header__item__title__heading_three">
                Hali ham chet tillarini o'rganolmadingizmi?
              </h3>
              <div className="header__item__title">
                <h1 className="header__item__title__heading">
                  TIL O'RGANISH ENDI OSON!
                </h1>
                <p className="header__item__title__paragraph">
                  Endi siz biz bilan Ingiliz-tili,Rus-tili kabi tillarni onson
                  o'rganasiz.
                </p>
                <button className="header__item__title__btn">
                  Tez boshlash
                </button>
              </div>
            </div>
            <img
              src={headerImage}
              alt="header image"
              className="header__item__image"
            />
          </header>
        </div>
      </div>
      <div className="why_us__section__wrapper">
        <section className="container why_us__section">
          <h2 className="why_us_title">Nega aynan Biz?</h2>
          <div className="why_us__cards">
            <div className="why_us__card">
              <div className="why_us__card__image__wrapper">
                <img
                  src={videoLesson}
                  alt="Video lesson"
                  className="why_us__card__image"
                />
              </div>
              <h3 className="why_us__card__heading">Interaktiv darslar</h3>
              <div className="why_us__card__paragrahp__wrapper">
                <p className="why_us__card__paragrahp">
                  The wise man therefore always holds in these matters to this
                  principle of selection: he rejects pleasures to secure other
                  greater pleasures, or else he endures pains to avoid worse
                  pains."
                </p>
              </div>
            </div>
            <div className="why_us__card">
              <div className="why_us__card__image__wrapper">
                <img
                  src={teacher}
                  alt="Video lesson"
                  className="why_us__card__image"
                />
              </div>
              <h3 className="why_us__card__heading">Tizimli mashg’ulotlar</h3>
              <div className="why_us__card__paragrahp__wrapper">
                <p className="why_us__card__paragrahp">
                  The wise man therefore always holds in these matters to this
                  principle of selection: he rejects pleasures to secure other
                  greater pleasures, or else he endures pains to avoid worse
                  pains."
                </p>
              </div>
            </div>
            <div className="why_us__card">
              <div className="why_us__card__image__wrapper">
                <img
                  src={money}
                  alt="Video lesson"
                  className="why_us__card__image"
                />
              </div>
              <h3 className="why_us__card__heading">Mutloqo bepul ta’lim</h3>
              <div className="why_us__card__paragrahp__wrapper">
                <p className="why_us__card__paragrahp">
                  The wise man therefore always holds in these matters to this
                  principle of selection: he rejects pleasures to secure other
                  greater pleasures, or else he endures pains to avoid worse
                  pains."
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="container section__container">
        <div className="main_section__wrapper">
          <img
            src={personalGoals}
            alt="personalGoals"
            className="main_section__image"
          />
          <div className="main_section">
            <h2 className="main_section__title__heading">
              Hech qachon izlanishdan to’xtamang!
            </h2>
            <div className="main_section__titles">
              <p className="main_section__title__paragraph">
                The wise man therefore always holds in these matters to this
                principle of selection: he rejects pleasures to secure other
                greater{" "}
              </p>
            </div>
            <div className="main_section__title__items">
              <div className="main_section__title__item">
                <img
                  src={oneIcon}
                  alt="oneIcon"
                  className="main_section__title__item__image"
                />
                <span className="main_section__title__item__text">
                  O’zingizni ustingizda{" "}
                  <span className="main_section__title__item__text__highligh">
                    har kuni
                  </span>{" "}
                  ishlang
                </span>
              </div>
              <div className="main_section__title__item">
                <img
                  src={two}
                  alt="two"
                  className="main_section__title__item__image"
                />
                <span className="main_section__title__item__text">
                  Yangi tilni{" "}
                  <span className="main_section__title__item__text__highligh">
                    biz bilan oson
                  </span>{" "}
                  o’rganing
                </span>
              </div>
              <div className="main_section__title__item">
                <img
                  src={three}
                  alt="three"
                  className="main_section__title__item__image"
                />
                <span className="main_section__title__item__text">
                  <span className="main_section__title__item__text__highligh">
                    Bepul
                  </span>{" "}
                  ta’lim oling
                </span>
              </div>
            </div>
            <button className="header__item__title__btn">Tez boshlash</button>
          </div>
        </div>
      </section>
      <section className="container about_us__container">
        <div className="about_us__title">
          <h2 className="about_us__title__heading">Bizning tashkilot haqida</h2>
          <p className="about_us__title__paragraph">
            The wise man therefore always holds in these matters to this
            principle of selection: he rejects pleasures to secure other greater{" "}
          </p>
          <p className="about_us__title__paragraph_two">
            The wise man therefore always holds in these matters to this
            principle of selection: he rejects pleasures to secure other greater{" "}
          </p>
          <button className="header__item__title__btn about_us__btn">
            Tez boshlash
          </button>
        </div>
        <img src={teamBro} alt="About us" className="about_us__image" />
      </section>
      <div className="statistics__wrapper">
        <h2 className="statistics">Statistikalar</h2>
        <section className="container statistics__container">
          <div className="statistics__card">
            <span className="statistics__title">
              Mavzu o’zlashtirish bo’yicha
            </span>
            <div className="statistics__menu">
              <ul className="statistics__menu__nav">
                <li className="statistics__menu__nav__li">
                  <span className="statistics__menu__nav__li__span"># </span>{" "}
                  ismlar
                </li>
                <li className="statistics__menu__nav__li">viloyat</li>
                <li className="statistics__menu__nav__li">o’rin</li>
              </ul>
              <ul className="statistics__menu__items">
                <li className="statistics__menu__item">
                  <div className="statistics__menu__item__user">
                    <img
                      src={user__image}
                      alt="user Image"
                      className="statistics__menu__item__image"
                    />
                    <span className="statistics__menu__item__text">
                      Mohinur
                    </span>
                  </div>
                  <span className="statistics__menu__item__text">Andijon</span>
                  <span className="">1-o’rin</span>
                </li>
                <li className="statistics__menu__item">
                  <div className="statistics__menu__item__user">
                    <img
                      src={user__image}
                      alt="user Image"
                      className="statistics__menu__item__image"
                    />
                    <span className="statistics__menu__item__text">Zebo</span>
                  </div>
                  <span className="statistics__menu__item__text">Andijon</span>
                  <span className="">2-o’rin</span>
                </li>
                <li className="statistics__menu__item">
                  <div className="statistics__menu__item__user">
                    <img
                      src={user__image}
                      alt="user Image"
                      className="statistics__menu__item__image"
                    />
                    <span className="statistics__menu__item__text">
                      Gulsanam
                    </span>
                  </div>
                  <span className="statistics__menu__item__text">Farg’ona</span>
                  <span className="">3-o’rin</span>
                </li>
                <li className="statistics__menu__item">
                  <div className="statistics__menu__item__user">
                    <img
                      src={user__image}
                      alt="user Image"
                      className="statistics__menu__item__image"
                    />
                    <span className="statistics__menu__item__text">
                      Rayhona
                    </span>
                  </div>
                  <span className="statistics__menu__item__text">Namangan</span>
                  <span className="">4-o’rin</span>
                </li>
                <li className="statistics__menu__item">
                  <div className="statistics__menu__item__user">
                    <img
                      src={user__image}
                      alt="user Image"
                      className="statistics__menu__item__image"
                    />
                    <span className="statistics__menu__item__text">
                      Adhamjon
                    </span>
                  </div>
                  <span className="statistics__menu__item__text">Farg’ona</span>
                  <span>5-o’rin</span>
                </li>
                <li className="statistics__menu__item">
                  <div className="statistics__menu__item__user">
                    <img
                      src={user__image}
                      alt="user Image"
                      className="statistics__menu__item__image"
                    />
                    <span className="statistics__menu__item__text">Alijon</span>
                  </div>
                  <span className="statistics__menu__item__text">Farg’ona</span>
                  <span>6-o’rin</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="statistics__card">
            <span className="statistics__title">
              Mavzu o’zlashtirish bo’yicha
            </span>
            <div className="statistics__menu">
              <ul className="statistics__menu__nav">
                <li className="statistics__menu__nav__li">
                  <span className="statistics__menu__nav__li__span"># </span>{" "}
                  ismlar
                </li>
                <li className="statistics__menu__nav__li">viloyat</li>
                <li className="statistics__menu__nav__li">o’rin</li>
              </ul>
              <ul className="statistics__menu__items">
                <li className="statistics__menu__item">
                  <div className="statistics__menu__item__user">
                    <img
                      src={user__image}
                      alt="user Image"
                      className="statistics__menu__item__image"
                    />
                    <span className="statistics__menu__item__text">
                      Mohinur
                    </span>
                  </div>
                  <span className="statistics__menu__item__text">Andijon</span>
                  <span className="">1-o’rin</span>
                </li>
                <li className="statistics__menu__item">
                  <div className="statistics__menu__item__user">
                    <img
                      src={user__image}
                      alt="user Image"
                      className="statistics__menu__item__image"
                    />
                    <span className="statistics__menu__item__text">Zebo</span>
                  </div>
                  <span className="statistics__menu__item__text">Andijon</span>
                  <span className="">2-o’rin</span>
                </li>
                <li className="statistics__menu__item">
                  <div className="statistics__menu__item__user">
                    <img
                      src={user__image}
                      alt="user Image"
                      className="statistics__menu__item__image"
                    />
                    <span className="statistics__menu__item__text">
                      Gulsanam
                    </span>
                  </div>
                  <span className="statistics__menu__item__text">Farg’ona</span>
                  <span>3-o’rin</span>
                </li>
                <li className="statistics__menu__item">
                  <div className="statistics__menu__item__user">
                    <img
                      src={user__image}
                      alt="user Image"
                      className="statistics__menu__item__image"
                    />
                    <span className="statistics__menu__item__text">
                      Rayhona
                    </span>
                  </div>
                  <span className="statistics__menu__item__text">Namangan</span>
                  <span>4-o’rin</span>
                </li>
                <li className="statistics__menu__item">
                  <div className="statistics__menu__item__user">
                    <img
                      src={user__image}
                      alt="user Image"
                      className="statistics__menu__item__image"
                    />
                    <span className="statistics__menu__item__text">
                      Adhamjon
                    </span>
                  </div>
                  <span className="statistics__menu__item__text">Farg’ona</span>
                  <span className="">5-o’rin</span>
                </li>
                <li className="statistics__menu__item">
                  <div className="statistics__menu__item__user">
                    <img
                      src={user__image}
                      alt="user Image"
                      className="statistics__menu__item__image"
                    />
                    <span className="statistics__menu__item__text">Alijon</span>
                  </div>
                  <span className="statistics__menu__item__text">Farg’ona</span>
                  <span className="">6-o’rin</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
