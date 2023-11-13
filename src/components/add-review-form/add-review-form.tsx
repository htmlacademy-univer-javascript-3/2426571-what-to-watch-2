import { ChangeEvent, Fragment, MouseEvent, useEffect, useState } from 'react';
import { IReviewData } from '../../types/interfaces';
import { addFilmCommentAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { ReducerName, RoutePath } from '../../types/enums';
import { capitalize } from '../../utils/utils';
import './add-review-form.scss';
import { setCommentAddErrors } from '../../store/action';
import { useNavigate } from 'react-router-dom';

interface AddReviewFormProps {
  filmId: string;
}

export const AddReviewForm = ({filmId}: AddReviewFormProps) => {
  const commentUploadingStatus = useAppSelector((state) => state[ReducerName.Comments].commentUploadingStatus);
  const commentAddErrors = useAppSelector((state) => state[ReducerName.Comments].commentAddErrors);
  const dispatch = useAppDispatch();
  const [reviewForm, setReviewForm] = useState<IReviewData>({
    filmId: filmId,
    comment: '',
    rating: -1,
  });
  const navigate = useNavigate();

  useEffect(() => () => {
    dispatch(setCommentAddErrors([]));
  }, []);

  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = event.target;
    setReviewForm({...reviewForm, [name]: value});
  };

  const handleInputChange = (event: MouseEvent<HTMLInputElement>) => {
    if (event.target instanceof HTMLInputElement) {
      const {name, value} = event.target;
      setReviewForm({...reviewForm, [name]: Number(value)});
    }
  };

  const handleSubmitClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(addFilmCommentAction(reviewForm)).then(() => {
      if (!commentAddErrors) {
        navigate(`/${RoutePath.Films}/${filmId}`);
      }
    });;
  };

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
        {commentAddErrors.length !== 0 ?
          <div className="add-review__message">
            {commentAddErrors.map((property) => property.messages.map((message) => <p key={message}>{capitalize(message)}</p>))}
          </div> :
          null}
        <div className="rating">
          <div className="rating__stars">
            {ratingStars}
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            id="review-text"
            name="comment"
            value={reviewForm.comment}
            onChange={handleTextAreaChange}
            placeholder="Review text"
          >
          </textarea>
          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
              onClick={handleSubmitClick}
              disabled={reviewForm.comment.length < 50 || reviewForm.comment.length > 400 || commentUploadingStatus}
            >
              Post
            </button>
          </div>

        </div>
      </form>
    </div>
  );
};
