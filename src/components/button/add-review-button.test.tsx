import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AddReviewButton } from './add-review-button';

const testFilmId = 'testFilmId123';

describe('Component: Add Review Button', () => {
  it('should render correctly', () => {
    const expectedText = /Add review/i;

    render(
      <MemoryRouter>
        <AddReviewButton filmId={testFilmId} />
      </MemoryRouter>
    );

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
