import "./kurslar.css";
import courses_img_english from "../../components/images/english__teacher.png";
import courses_img_russian from "../../components/images/russian__teacher.png";
import courses_img_korean from "../../components/images/korean__teacher.png";

import reading__book from "../../components/images/reading__book.png";
import video__lesson_1x from "../../components/images/video__lesson_1x.png";
import comment_icon from "../../components/images/comment.png";

import polygan from "../../components/images/poliygan.svg";
import { useState } from "react";
const Kurslar = () => {
  const [commentIsOpen, setcommentIsOpen] = useState(false);
  return (
    <div className="wrapper">
      <div className="container kurslar__container">
        <div className="lesson__cars">
          <div className="lesson__card">
            <div className="lesson__card__icon">
              <span>1</span>
            </div>
            <img
              src={courses_img_english}
              alt="courses img english"
              className="lesson__card__img"
            />
            <div className="lesson__card__titles">
              <h2 className="lesson__card__heading__title">Ingiliz-tili</h2>
              <div className="lesson__card__about__lesson">
                <div className="lesson__card__lesson__students">
                  <img
                    src={reading__book}
                    alt="reading__book"
                    className="lesson__card__lesson__students__img"
                  />
                  <span className="lesson__card__lesson__students__title">
                    45
                  </span>
                </div>
                <div className="lesson__card__video__lesson">
                  <img
                    src={video__lesson_1x}
                    alt="video__lesson_1x"
                    className="lesson__card__video__lesson__img"
                  />
                  <span className="lesson__card__video__lesson__title">45</span>
                </div>
                <div
                  className="lesson__card__more__about"
                  onClick={() => setcommentIsOpen(!commentIsOpen)}
                >
                  <img
                    src={comment_icon}
                    alt="comment_icon"
                    className="lesson__card__more__about__img"
                  />
                  <span className="lesson__card__more__about__title">
                    ko’proq
                  </span>
                </div>
              </div>
            </div>
            <div className="lesson__card__price">
              <div className="lesson__card__price__titles">
                <p className="lesson__card__price__title">
                  <del className="lesson__card__price__title__discount">
                    UZS 340 000
                  </del>
                </p>
                <span className="lesson__card__price__title__about">
                  Mutloq tekin
                </span>
              </div>
              <button className="lesson__card__price__title__start">
                Boshlash
              </button>
            </div>
            {commentIsOpen && (
              <div className="lesson__card__about__comment">
                <img src={polygan} alt="polygan" />
                <p>
                  Siz bu kurs orqali ingiliz tili boyicha barcha kerakli
                  bilimlarni organa olasiz
                </p>
              </div>
            )}
          </div>
          <div className="lesson__card">
            <div className="lesson__card__icon">
              <span>1</span>
            </div>
            <img
              src={courses_img_english}
              alt="courses img english"
              className="lesson__card__img"
            />
            <div className="lesson__card__titles">
              <h2 className="lesson__card__heading__title">Ingiliz-tili</h2>
              <div className="lesson__card__about__lesson">
                <div className="lesson__card__lesson__students">
                  <img
                    src={reading__book}
                    alt="reading__book"
                    className="lesson__card__lesson__students__img"
                  />
                  <span className="lesson__card__lesson__students__title">
                    45
                  </span>
                </div>
                <div className="lesson__card__video__lesson">
                  <img
                    src={video__lesson_1x}
                    alt="video__lesson_1x"
                    className="lesson__card__video__lesson__img"
                  />
                  <span className="lesson__card__video__lesson__title">45</span>
                </div>
                <div
                  className="lesson__card__more__about"
                  onClick={() => setcommentIsOpen(!commentIsOpen)}
                >
                  <img
                    src={comment_icon}
                    alt="comment_icon"
                    className="lesson__card__more__about__img"
                  />
                  <span className="lesson__card__more__about__title">
                    ko’proq
                  </span>
                </div>
              </div>
            </div>
            <div className="lesson__card__price">
              <div className="lesson__card__price__titles">
                <p className="lesson__card__price__title">
                  <del className="lesson__card__price__title__discount">
                    UZS 340 000
                  </del>
                </p>
                <span className="lesson__card__price__title__about">
                  Mutloq tekin
                </span>
              </div>
              <button className="lesson__card__price__title__start">
                Boshlash
              </button>
            </div>
            {commentIsOpen && (
              <div className="lesson__card__about__comment">
                <img src={polygan} alt="polygan" />
                <p>
                  Siz bu kurs orqali ingiliz tili boyicha barcha kerakli
                  bilimlarni organa olasiz
                </p>
              </div>
            )}
          </div>
          <div className="lesson__card">
            <div className="lesson__card__icon">
              <span>1</span>
            </div>
            <img
              src={courses_img_english}
              alt="courses img english"
              className="lesson__card__img"
            />
            <div className="lesson__card__titles">
              <h2 className="lesson__card__heading__title">Ingiliz-tili</h2>
              <div className="lesson__card__about__lesson">
                <div className="lesson__card__lesson__students">
                  <img
                    src={reading__book}
                    alt="reading__book"
                    className="lesson__card__lesson__students__img"
                  />
                  <span className="lesson__card__lesson__students__title">
                    45
                  </span>
                </div>
                <div className="lesson__card__video__lesson">
                  <img
                    src={video__lesson_1x}
                    alt="video__lesson_1x"
                    className="lesson__card__video__lesson__img"
                  />
                  <span className="lesson__card__video__lesson__title">45</span>
                </div>
                <div
                  className="lesson__card__more__about"
                  onClick={() => setcommentIsOpen(!commentIsOpen)}
                >
                  <img
                    src={comment_icon}
                    alt="comment_icon"
                    className="lesson__card__more__about__img"
                  />
                  <span className="lesson__card__more__about__title">
                    ko’proq
                  </span>
                </div>
              </div>
            </div>
            <div className="lesson__card__price">
              <div className="lesson__card__price__titles">
                <p className="lesson__card__price__title">
                  <del className="lesson__card__price__title__discount">
                    UZS 340 000
                  </del>
                </p>
                <span className="lesson__card__price__title__about">
                  Mutloq tekin
                </span>
              </div>
              <button className="lesson__card__price__title__start">
                Boshlash
              </button>
            </div>
            {commentIsOpen && (
              <div className="lesson__card__about__comment">
                <img src={polygan} alt="polygan" />
                <p>
                  Siz bu kurs orqali ingiliz tili boyicha barcha kerakli
                  bilimlarni organa olasiz
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kurslar;
