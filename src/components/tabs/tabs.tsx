import { useState } from 'react';
import { IFilm, IReview } from '../../types/interfaces';
import { Review } from '../review/review';

interface TabsProps {
  film: IFilm;
  reviews: IReview[];
}

export const Tabs = ({film, reviews}: TabsProps) => {
  const [activeTab, setActiveTab] = useState<string>('Overview');
  const tabs = ['Overview', 'Details', 'Reviews'];

  const navigationItems = tabs.map((tab) => (
    <li className={`film-nav__item ${activeTab === tab ? 'film-nav__item--active' : ''}`} key={tab}>
      <a onClick={() => setActiveTab(tab)} className="film-nav__link">{tab}</a>
    </li>
  ));

  const DetailsItem = (props: {itemName: string, itemValue: string}) => (
    <p className="film-card__details-item">
      <strong className="film-card__details-name">{props.itemName}</strong>
      <span className="film-card__details-value">{props.itemValue}</span>
    </p>
  );

  const reviewsItems = reviews.map((review) => (
    <Review review={review} />
  ));

  const formatDuration = (duration: number): string => {
    const hours = Math.floor(duration / 60);
    const minutes = Math.floor(duration - hours * 60);
    return `${hours}h ${minutes}m`;
  };

  const formatCast = (cast: string): string => cast.replace(/, /gi, ', \n');

  return (
    <div className="film-card__wrap film-card__translate-top">
      <div className="film-card__info">
        <div className="film-card__poster film-card__poster--big">
          <img src={film.poster} alt={`${film.title} poster`} />
        </div>

        <div className="film-card__desc">
          <nav className="film-nav film-card__nav">
            <ul className="film-nav__list">
              {navigationItems}
            </ul>
          </nav>

          {activeTab === 'Overview' ? (
          <>
            <div className="film-rating">
              <div className="film-rating__score">{film.rating}</div>
              <p className="film-rating__meta">
                <span className="film-rating__level">Very good</span>
                <span className="film-rating__count">{reviews.length} ratings</span>
              </p>
            </div>

            <div className="film-card__text">
              <p>{film.summary}</p>

              <p className="film-card__director"><strong>Director: {film.director}</strong></p>

              <p className="film-card__starring"><strong>Starring: {film.cast}</strong></p>
            </div>
          </>
          ) : activeTab === 'Details' ? (
          <div className="film-card__text film-card__row">
            <div className="film-card__text-col">
              <DetailsItem itemName='Director' itemValue={film.director} />
              <DetailsItem itemName='Starring' itemValue={formatCast(film.cast)} />
            </div>

            <div className="film-card__text-col">
              <DetailsItem itemName='Run Time' itemValue={formatDuration(film.runtime)} />
              <DetailsItem itemName='Genre' itemValue={film.genres} />
              <DetailsItem itemName='Released' itemValue={`${film.year}`} />
            </div>
          </div>
          ) : activeTab === 'Reviews' ? (
          <div className="film-card__reviews film-card__row">
            <div className="film-card__reviews-col">
              {reviewsItems.slice(0, Math.ceil(reviewsItems.length / 2))}
            </div>
            <div className="film-card__reviews-col">
              {reviewsItems.slice(Math.ceil(reviewsItems.length / 2), reviewsItems.length)}
            </div>
          </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
