import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../../../../src/components/Header';

describe('Header Component', () => {
    it('renders without crashing', () => {
        render(<Header />);
        expect(screen.getByText('GitHub Finder')).toBeInTheDocument();
    });

    it('displays the logo image', () => {
        render(<Header />);
        const logoImg = screen.getByRole('img');
        expect(logoImg).toHaveClass('icon rotate header__logoIcon');
    });

    it('has correct title text', () => {
        render(<Header />);
        const titleElement = screen.getByText('GitHub Finder');
        expect(titleElement).toBeInTheDocument();
    });

    it('has the correct class for the header', () => {
        render(<Header />);
        const headerElement = screen.getByText('GitHub Finder').parentNode;
        expect(headerElement).toHaveClass('header');
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Header />);
        expect(asFragment()).toMatchSnapshot();
    });
});