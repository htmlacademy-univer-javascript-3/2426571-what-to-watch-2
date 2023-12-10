import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Footer } from './footer';

describe('Component: Footer', () => {
  it('should render correctly', () => {
    const expectedText = /© 2019 What to watch Ltd./i;

    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  it('should contain logo', () => {
    const expectedTextW = /W/i;
    const expectedTextT = /T/i;

    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>);

    expect(screen.getAllByText(expectedTextW)).toHaveLength(3);
    expect(screen.getByText(expectedTextT)).toBeInTheDocument();
  });
});
