import { memo } from 'react';
import { Link } from 'react-router-dom';
import { RoutePath } from '../../types/enums';

interface AddReviewButtonProps {
  filmId: string;
}

const AddReviewButtonComponent = ({filmId}: AddReviewButtonProps) => (
  <Link to={`/${RoutePath.Films}/${filmId}/${RoutePath.AddReview}`} className="btn film-card__button">
    Add review
  </Link>
);

export const AddReviewButton = memo(AddReviewButtonComponent);
