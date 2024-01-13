import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SimpleInput from '../../../../../src/components/common/SimpleInput';

describe('SimpleInput Component', () => {
    const mockOnChange = jest.fn();
    it('renders without crashing', () => {
        render(<SimpleInput onChange={mockOnChange} value='' />);
        expect(screen.getByTestId('SimpleInput')).toBeInTheDocument();
    });

    it('handles className prop', () => {
        render(<SimpleInput onChange={mockOnChange} value='' className='testClass' />);
        expect(screen.getByTestId('SimpleInput')).toHaveClass('testClass');
    });

    it('uses default label when label prop is not provided', () => {
        const defaultLabelText = 'Search';
        render(<SimpleInput onChange={mockOnChange} value='' />);
        expect(screen.getByLabelText(defaultLabelText)).toBeInTheDocument();
    });

    it('calls onChange prop when changed', () => {
        render(<SimpleInput onChange={mockOnChange} value='' />);
        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'New Value' } });
        expect(mockOnChange).toHaveBeenCalledTimes(1);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<SimpleInput onChange={mockOnChange} value='' />);
        expect(asFragment()).toMatchSnapshot();
    });
});