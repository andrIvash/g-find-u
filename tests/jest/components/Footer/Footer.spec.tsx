import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../../../../src/components/Footer';

describe('Footer Component', () => {
    it('renders without crashing', () => {
        render(<Footer />)
        expect(screen.getByText(/2024/)).toBeInTheDocument();
    });

    it('contains correct copyright text', () => {
        render(<Footer />);
        const footerElement = screen.getByText(/2024/);
        expect(footerElement).toHaveTextContent('© 2024');
    });

    it('has the correct class', () => {
        render(<Footer />);
        const footerElement = screen.getByTestId('Footer');
        expect(footerElement).toHaveClass('footer center');
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Footer />);
        expect(asFragment()).toMatchSnapshot();
    });
});