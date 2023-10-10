import { Fragment, useState } from 'react';
import { IReview } from '../../types/interfaces';

interface AddReviewFormProps {
  filmId: number;
}

export const AddReviewForm = ({filmId}: AddReviewFormProps) => {
  const [reviewForm, setReviewForm] = useState<IReview>({
    id: -1,
    filmId: filmId,
    text: '',
    rating: -1,
  });

  const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = event.target;
    setReviewForm({...reviewForm, [name]: value});
  }

  const handleInputChange = (event: React.MouseEvent<HTMLInputElement>) => {
    const {name, value} = event.target as MouseEvent & HTMLInputElement;
    setReviewForm({...reviewForm, [name]: Number(value)});
  }

  const handleSubmitClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(reviewForm);
    setReviewForm({
      id: -1,
      filmId: filmId,
      text: '',
      rating: -1,
    });
  }

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
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {ratingStars}
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            id="review-text"
            name="text"
            value={reviewForm.text}
            onChange={handleTextAreaChange}
            placeholder="Review text">
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" onClick={handleSubmitClick}>Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}