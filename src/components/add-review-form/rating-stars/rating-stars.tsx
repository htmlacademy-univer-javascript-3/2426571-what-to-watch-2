import { Fragment, memo, MouseEvent } from 'react';

interface RatingStarsProps {
  handleInputChange: (event: MouseEvent<HTMLInputElement>) => void;
}

const RatingStarsComponent = ({ handleInputChange }: RatingStarsProps) => {
  const ratingStars = [...Array(10).keys()].reverse().map((i) => (
    <Fragment key={i + 1} >
      <input
        className="rating__input"
        id={`star-${i + 1}`}
        type="radio"
        name="rating"
        value={i + 1}
        onClick={handleInputChange}
      />
      <label className="rating__label" htmlFor={`star-${i + 1}`}>Rating {i + 1}</label>
    </Fragment>
  ));

  return (
    <div className="rating">
      <div className="rating__stars">
        {ratingStars}
      </div>
    </div>
  );
};

export const RatingStars = memo(RatingStarsComponent);
