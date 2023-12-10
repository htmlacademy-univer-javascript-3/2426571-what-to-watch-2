import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { filmsShort } from '../../mocks/films-short';
import { FilmSmallCard } from './film-small-card';

const mockFilmShort = filmsShort[0];

describe('Component: FilmSmallCard', () => {
  const expectedTextName = new RegExp(mockFilmShort.name, 'i');
  const expectedTextAltPoster = new RegExp(`${mockFilmShort.name} poster`, 'i');

  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <FilmSmallCard film={mockFilmShort} />
      </MemoryRouter>
    );

    expect(screen.getByText(expectedTextName)).toBeInTheDocument();
    expect(screen.getByAltText(expectedTextAltPoster)).toBeInTheDocument();
  });
});
