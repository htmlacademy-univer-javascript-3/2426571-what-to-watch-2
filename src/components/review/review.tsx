import { IReview } from '../../types/interfaces';

interface ReviewProps {
  review: IReview;
}

export const Review = ({review}: ReviewProps) => (
  <div className="review">
    <blockquote className="review__quote">
      <p className="review__text">{review.text}</p>

      <footer className="review__details">
        <cite className="review__author">{review.author}</cite>
        <time className="review__date" dateTime={review.date.toISOString().split('T')[0]}>
          {review.date.toLocaleString('en-us', { month: 'long', day: 'numeric', year: 'numeric' })}
        </time>
      </footer>
    </blockquote>

    <div className="review__rating">{review.rating}</div>
  </div>
);
