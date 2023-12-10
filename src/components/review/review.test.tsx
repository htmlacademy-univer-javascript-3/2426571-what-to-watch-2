import { render, screen } from '@testing-library/react';
import { reviews } from '../../mocks/reviews';
import { Review } from './review';

const mockReview = reviews[0];

describe('Component: Review', () => {
  it('should render correctly', () => {
    const expectedTextComment = new RegExp(mockReview.comment, 'i');
    const expectedTextUser = new RegExp(mockReview.user, 'i');
    const expectedTextRating = new RegExp(`${mockReview.rating}`, 'i');
    const expectedTextDate = new RegExp(new Date(mockReview.date).toLocaleString('en-us', { month: 'long', day: 'numeric', year: 'numeric' }), 'i');

    render(
      <Review review={mockReview} />
    );

    expect(screen.getByText(expectedTextComment)).toBeInTheDocument();
    expect(screen.getByText(expectedTextUser)).toBeInTheDocument();
    expect(screen.getByText(expectedTextRating)).toBeInTheDocument();
    expect(screen.getByText(expectedTextDate)).toBeInTheDocument();
  });
});
