import { render, screen } from '@testing-library/react';
import { DetailsItem } from './details-item';

const mockDetailsItem = {
  name: 'mock DetailsItem name',
  value: 'mock DetailsItem value',
}

describe('Component: DetailsItem', () => {
  it('should render correctly', () => {
    const expectedTextName = new RegExp(mockDetailsItem.name, 'i');
    const expectedTextValue = new RegExp(mockDetailsItem.value, 'i');

    render(
      <DetailsItem name={mockDetailsItem.name} value={mockDetailsItem.value} />
    );

    expect(screen.getByText(expectedTextName)).toBeInTheDocument();
    expect(screen.getByText(expectedTextValue)).toBeInTheDocument();
  });
});
