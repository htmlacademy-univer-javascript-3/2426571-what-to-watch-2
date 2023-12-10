import { render, screen } from '@testing-library/react';
import { Tabs } from './tabs';
import { films } from '../../mocks/films';
import { reviews } from '../../mocks/reviews';
import { formatCastWithComma, formatRating } from './utils';

const mockFilm = films[0];

describe('Component: Tabs', () => {
  it('should render tabs correctly', () => {
    const expectedTextOverview = new RegExp('Overview', 'i');
    const expectedTextDetails = new RegExp('Details', 'i');
    const expectedTextReviews = new RegExp('Reviews', 'i');
    const expectedTextAltPoster = new RegExp(`${mockFilm.name} poster`, 'i');

    render(
      <Tabs film={mockFilm} reviews={reviews} />
    );

    expect(screen.getByText(expectedTextOverview)).toBeInTheDocument();
    expect(screen.getByText(expectedTextDetails)).toBeInTheDocument();
    expect(screen.getByText(expectedTextReviews)).toBeInTheDocument();
    expect(screen.getByAltText(expectedTextAltPoster)).toBeInTheDocument();
  });

  it('should render Overview tab correctly', () => {
    const expectedTextRatingScore = new RegExp(`${mockFilm.rating}`, 'i');
    const expectedTextRatingLevel = new RegExp(formatRating(mockFilm.rating), 'i');
    const expectedTextRatingCount = new RegExp(`${reviews.length} ratings`, 'i');
    const expectedTextDescription = new RegExp(mockFilm.description, 'i');
    const expectedTextDirector = new RegExp(`Director: ${mockFilm.director}`, 'i');
    const expectedTextStarring = new RegExp(`Starring: ${formatCastWithComma(mockFilm.starring)}`, 'i');

    render(
      <Tabs film={mockFilm} reviews={reviews} />
    );

    expect(screen.getByText(expectedTextRatingScore)).toBeInTheDocument();
    expect(screen.getByText(expectedTextRatingLevel)).toBeInTheDocument();
    expect(screen.getByText(expectedTextRatingCount)).toBeInTheDocument();
    expect(screen.getByText(expectedTextDescription)).toBeInTheDocument();
    expect(screen.getByText(expectedTextDirector)).toBeInTheDocument();
    expect(screen.getByText(expectedTextStarring)).toBeInTheDocument();
  });

  it('should render Overview tab correctly with zero reviews', () => {
    const expectedTextRatingScore = new RegExp('N/A', 'i');
    const expectedTextRatingCount = new RegExp('0 ratings', 'i');
    const expectedTextDescription = new RegExp(mockFilm.description, 'i');
    const expectedTextDirector = new RegExp(`Director: ${mockFilm.director}`, 'i');
    const expectedTextStarring = new RegExp(`Starring: ${formatCastWithComma(mockFilm.starring)}`, 'i');

    render(
      <Tabs film={mockFilm} reviews={[]} />
    );

    expect(screen.getByText(expectedTextRatingScore)).toBeInTheDocument();
    expect(screen.getByText(expectedTextRatingCount)).toBeInTheDocument();
    expect(screen.getByText(expectedTextDescription)).toBeInTheDocument();
    expect(screen.getByText(expectedTextDirector)).toBeInTheDocument();
    expect(screen.getByText(expectedTextStarring)).toBeInTheDocument();
  });
});
