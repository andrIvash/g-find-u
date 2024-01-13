import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import SimpleButton from '../../../../../src/components/common/SimpleButton';

describe('SimpleButton Component', () => {
    const mockOnClick = jest.fn();
  
    it('renders correctly with provided label', () => {
      const label = 'Click Me';
      render(<SimpleButton label={label} onClick={mockOnClick} />);
      expect(screen.getByText(label)).toBeInTheDocument();
    });

    it('renders correctly with default label', () => {
        const defaultLabel = 'Ok';
        render(<SimpleButton onClick={mockOnClick} />);
        expect(screen.getByText(defaultLabel)).toBeInTheDocument();
      });
  
    it('calls onClick prop when clicked', () => {
      const label = 'Click Me';
      render(<SimpleButton label={label} onClick={mockOnClick} />);
      fireEvent.click(screen.getByText(label));
      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
  
    it('matches snapshot', () => {
      const label = 'Click Me';
      const { asFragment } = render(<SimpleButton label={label} onClick={mockOnClick} />);
      expect(asFragment()).toMatchSnapshot();
    });
  });