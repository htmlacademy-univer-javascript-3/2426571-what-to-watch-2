import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Logo } from './logo';

describe('Component: Logo', () => {
  it('should render correctly', () => {
    const expectedTextW = /W/i;
    const expectedTextT = /T/i;

    render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    );

    expect(screen.getAllByText(expectedTextW)).toHaveLength(2);
    expect(screen.getByText(expectedTextT)).toBeInTheDocument();
  });
});
