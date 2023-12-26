import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { PlayButton } from './play-button';

const testFilmId = 'testFilmId123';

describe('Component: PlayButton', () => {
  it('should render correctly', () => {
    const expectedText = /Play/i;

    render(
      <MemoryRouter>
        <PlayButton filmId={testFilmId} />
      </MemoryRouter>
    );

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.getByRole('play-icon')).toBeInTheDocument();
  });
});
