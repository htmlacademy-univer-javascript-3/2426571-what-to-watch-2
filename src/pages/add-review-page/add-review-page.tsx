import React from 'react';
import './add-review-page.scss';
import { Header } from '../../components/header/header';
import { AuthorizationStatus, RoutePath } from '../../types/enums';
import { Link } from 'react-router-dom';

interface AddReviewPageProps { }

export const AddReviewPage = (props: AddReviewPageProps) => {
  const ratingStars = [...Array(10).keys()].reverse().map((i) => (
    <React.Fragment key={i} >
      <input className="rating__input" id={`star-${i + 1}`} type="radio" name="rating" value={i + 1} />
      <label className="rating__label" htmlFor={`star-${i + 1}`}>Rating {i + 1}</label>
    </React.Fragment>
  ));

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header authorizationStatus={AuthorizationStatus.Auth}>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to={RoutePath.Film}>The Grand Budapest Hotel</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to={RoutePath.AddReview} >Add review</Link>
              </li>
            </ul>
          </nav>
        </Header>

        <div className="film-card__poster film-card__poster--small">
          <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form">
          <div className="rating">
            <div className="rating__stars">
              {ratingStars}
            </div>
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
};
