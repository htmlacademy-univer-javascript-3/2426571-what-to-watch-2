import { IFilm, IReview } from '../../../types/interfaces';
import { Review } from '../../review/review';
import { DetailsItem } from '../details-item/details-item';
import { formatCastWithComma, formatCastWithNextLine, formatDuration, formatRating } from '../utils';

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
          <div className="film-rating__score">{reviews.length > 0 ? film.rating : 'N/A'}</div>
          <p className="film-rating__meta">
            <span className="film-rating__level">{reviews.length > 0 ? formatRating(film.rating) : ''}</span>
            <span className="film-rating__count">{reviews.length} ratings</span>
          </p>
        </div>

        <div className="film-card__text">
          <p>{film.description}</p>

          <p className="film-card__director"><strong>Director: {film.director}</strong></p>

          <p className="film-card__starring"><strong>Starring: {formatCastWithComma(film.starring)}</strong></p>
        </div>
      </>
    );
  }
  if (activeTab === 'Details') {
    return (
      <div className="film-card__text film-card__row">
        <div className="film-card__text-col">
          <DetailsItem name='Director' value={film.director} />
          <DetailsItem name='Starring' value={formatCastWithNextLine(film.starring)} />
        </div>

        <div className="film-card__text-col">
          <DetailsItem name='Run Time' value={formatDuration(film.runTime)} />
          <DetailsItem name='Genre' value={film.genre} />
          <DetailsItem name='Released' value={`${film.released}`} />
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
