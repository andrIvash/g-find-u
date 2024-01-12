import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import SimpleSwitch from '../../../../../src/components/common/SimpleSwitch';

describe('SimpleSwitch Component', () => {
  const mockOnChange = jest.fn();

  it('renders correctly', () => {
    const { asFragment } = render(<SimpleSwitch onChange={mockOnChange} checked={false} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays left and right labels when provided', () => {
    render(<SimpleSwitch onChange={mockOnChange} leftLabel="Left" rightLabel="Right" checked={false} />);
    expect(screen.getByText('Left')).toBeInTheDocument();
    expect(screen.getByText('Right')).toBeInTheDocument();
  });

  it('toggles switch state on click', () => {
    render(<SimpleSwitch onChange={mockOnChange} checked={false} />);
    const switchControl = screen.getByRole('checkbox');
    fireEvent.click(switchControl);
    expect(mockOnChange).toHaveBeenCalledWith(true);
  });
});