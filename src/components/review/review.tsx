import { IReview } from '../../types/interfaces';

interface ReviewProps {
  review: IReview;
}

export const Review = ({review}: ReviewProps) => (
  <div className="review">
    <blockquote className="review__quote">
      <p className="review__text">{review.comment}</p>

      <footer className="review__details">
        <cite className="review__author">{review.user}</cite>
        <time className="review__date" dateTime={review.date.split('T')[0]}>
          {new Date(review.date).toLocaleString('en-us', { month: 'long', day: 'numeric', year: 'numeric' })}
        </time>
      </footer>
    </blockquote>

    <div className="review__rating">{review.rating}</div>
  </div>
);
