import { IFilm, IReview } from '../../../types/interfaces';
import { Review } from '../../review/review';
import { DetailsItem } from '../details-item/details-item';
import { formatCast, formatDuration } from '../utils';

interface ActiveTabProps {
  activeTab: string;
  film: IFilm;
  reviews: IReview[];
}

export const ActiveTab = ({activeTab, film, reviews}: ActiveTabProps) => {
  const reviewsItems = reviews.map((review) => (
    <Review key={review.id} review={review} />
  ));

  if (activeTab === 'Overview') {
    return (
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
    );
  }
  if (activeTab === 'Details') {
    return (
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
    );
  }
  if (activeTab === 'Reviews') {
    return (
      <div className="film-card__reviews film-card__row">
        <div className="film-card__reviews-col">
          {reviewsItems.slice(0, Math.ceil(reviewsItems.length / 2))}
        </div>
        <div className="film-card__reviews-col">
          {reviewsItems.slice(Math.ceil(reviewsItems.length / 2), reviewsItems.length)}
        </div>
      </div>
    );
  }
  return null;
};
