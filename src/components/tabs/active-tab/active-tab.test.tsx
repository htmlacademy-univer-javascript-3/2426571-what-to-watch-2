import { render, screen } from '@testing-library/react';
import { ActiveTab } from './active-tab';
import { films } from '../../../mocks/films';
import { reviews } from '../../../mocks/reviews';
import { formatCastWithComma, formatDuration, formatRating } from '../utils';

const mockFilm = films[0];

describe('Component: DetailsItem', () => {
  it('should render Overview tab correctly', () => {
    const expectedTextRatingScore = new RegExp(`${mockFilm.rating}`, 'i');
    const expectedTextRatingLevel = new RegExp(formatRating(mockFilm.rating), 'i');
    const expectedTextRatingCount = new RegExp(`${reviews.length} ratings`, 'i');
    const expectedTextDescription = new RegExp(mockFilm.description, 'i');
    const expectedTextDirector = new RegExp(`Director: ${mockFilm.director}`, 'i');
    const expectedTextStarring = new RegExp(`Starring: ${formatCastWithComma(mockFilm.starring)}`, 'i');

    render(
      <ActiveTab activeTab={'Overview'} film={mockFilm} reviews={reviews} />
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
      <ActiveTab activeTab={'Overview'} film={mockFilm} reviews={[]} />
    );

    expect(screen.getByText(expectedTextRatingScore)).toBeInTheDocument();
    expect(screen.getByText(expectedTextRatingCount)).toBeInTheDocument();
    expect(screen.getByText(expectedTextDescription)).toBeInTheDocument();
    expect(screen.getByText(expectedTextDirector)).toBeInTheDocument();
    expect(screen.getByText(expectedTextStarring)).toBeInTheDocument();
  });

  it('should render Details tab correctly', () => {
    const expectedTextDirectorName = new RegExp('Director', 'i');
    const expectedTextDirectorValue = new RegExp(mockFilm.director, 'i');
    const expectedTextStarringName = new RegExp('Starring', 'i');
    const mockFilmStarring = mockFilm.starring[0].split(', ');
    const expectedTextStarringValueFirst = new RegExp(mockFilmStarring[0], 'i');
    const expectedTextStarringValueSecond = new RegExp(mockFilmStarring[1], 'i');
    const expectedTextStarringValueThird = new RegExp(mockFilmStarring[2], 'i');
    const expectedTextRunTimeName = new RegExp('Run Time', 'i');
    const expectedTextRunTimeValue = new RegExp(formatDuration(mockFilm.runTime), 'i');
    const expectedTextGenreName = new RegExp('Genre', 'i');
    const expectedTextGenreValue = new RegExp(mockFilm.genre, 'i');
    const expectedTextReleasedName = new RegExp('Released', 'i');
    const expectedTextReleasedValue = new RegExp(`${mockFilm.released}`, 'i');

    render(
      <ActiveTab activeTab={'Details'} film={mockFilm} reviews={reviews} />
    );

    expect(screen.getByText(expectedTextDirectorName)).toBeInTheDocument();
    expect(screen.getByText(expectedTextDirectorValue)).toBeInTheDocument();
    expect(screen.getByText(expectedTextStarringName)).toBeInTheDocument();
    expect(screen.getByText(expectedTextStarringValueFirst)).toBeInTheDocument();
    expect(screen.getByText(expectedTextStarringValueSecond)).toBeInTheDocument();
    expect(screen.getByText(expectedTextStarringValueThird)).toBeInTheDocument();
    expect(screen.getByText(expectedTextRunTimeName)).toBeInTheDocument();
    expect(screen.getByText(expectedTextRunTimeValue)).toBeInTheDocument();
    expect(screen.getByText(expectedTextGenreName)).toBeInTheDocument();
    expect(screen.getByText(expectedTextGenreValue)).toBeInTheDocument();
    expect(screen.getByText(expectedTextReleasedName)).toBeInTheDocument();
    expect(screen.getByText(expectedTextReleasedValue)).toBeInTheDocument();
  });

  it('should render Reviews tab correctly', () => {
    const expectedTextCommentFirst = new RegExp(reviews[0].comment, 'i');
    const expectedTextUserFirst = new RegExp(reviews[0].user, 'i');
    const expectedTextRatingFirst = new RegExp(`${reviews[0].rating}`, 'i');
    const expectedTextDateFirst = new RegExp(new Date(reviews[0].date).toLocaleString('en-us', { month: 'long', day: 'numeric', year: 'numeric' }), 'i');
    const expectedTextCommentSecond = new RegExp(reviews[1].comment, 'i');
    const expectedTextUserSecond = new RegExp(reviews[1].user, 'i');
    const expectedTextRatingSecond = new RegExp(`${reviews[1].rating}`, 'i');
    const expectedTextDateSecond = new RegExp(new Date(reviews[1].date).toLocaleString('en-us', { month: 'long', day: 'numeric', year: 'numeric' }), 'i');

    render(
      <ActiveTab activeTab={'Reviews'} film={mockFilm} reviews={reviews} />
    );

    expect(screen.getByText(expectedTextCommentFirst)).toBeInTheDocument();
    expect(screen.getByText(expectedTextUserFirst)).toBeInTheDocument();
    expect(screen.getByText(expectedTextRatingFirst)).toBeInTheDocument();
    expect(screen.getByText(expectedTextDateFirst)).toBeInTheDocument();
    expect(screen.getByText(expectedTextCommentSecond)).toBeInTheDocument();
    expect(screen.getByText(expectedTextUserSecond)).toBeInTheDocument();
    expect(screen.getByText(expectedTextRatingSecond)).toBeInTheDocument();
    expect(screen.getByText(expectedTextDateSecond)).toBeInTheDocument();
  });

  it('should render non-existing tab correctly', () => {
    const { container } = render(
      <ActiveTab activeTab={'Non-existing tab'} film={mockFilm} reviews={reviews} />
    );

    expect(container.querySelector('body')).toBeNull();
  });
});
