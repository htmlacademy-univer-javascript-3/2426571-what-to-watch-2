import { ChangeEvent, MouseEvent, memo, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCommentAddErrors } from '../../store/action';
import { addFilmCommentAction } from '../../store/api-actions';
import { ReducerName, RoutePath } from '../../types/enums';
import { IReviewData } from '../../types/interfaces';
import { capitalize } from '../../utils/utils';
import { RatingStars } from './rating-stars/rating-stars';
import './add-review-form.scss';

const COMMENT_MIN_LENGTH = 50;
const COMMENT_MAX_LENGTH = 400;

interface AddReviewFormProps {
  filmId: string;
}

const AddReviewFormComponent = ({filmId}: AddReviewFormProps) => {
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
  }, [dispatch]);

  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = event.target;
    setReviewForm({...reviewForm, [name]: value});
  };

  const handleInputChange = useCallback((event: MouseEvent<HTMLInputElement>) => {
    if (event.target instanceof HTMLInputElement) {
      const {name, value} = event.target;
      setReviewForm((previousState) => ({...previousState, [name]: Number(value)}));
    }
  }, []);

  const handleSubmitClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(addFilmCommentAction(reviewForm)).then(() => {
      if (commentAddErrors.length === 0) {
        navigate(`/${RoutePath.Films}/${filmId}`);
      }
    });
  };

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
            <RatingStars handleInputChange={handleInputChange} />
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
              disabled={reviewForm.comment.length < COMMENT_MIN_LENGTH || reviewForm.comment.length > COMMENT_MAX_LENGTH || commentUploadingStatus}
            >
              Post
            </button>
          </div>

        </div>
      </form>
    </div>
  );
};

export const AddReviewForm = memo(AddReviewFormComponent);
