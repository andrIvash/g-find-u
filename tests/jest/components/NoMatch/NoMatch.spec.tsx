import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import NoMatch from '../../../../src/components/NoMatch';

const renderWithRouter = (component) => {
    return {
        ...render(<Router>{component}</Router>)
    };
};

describe('NoMatch Component', () => {
    it('renders without crashing', () => {
        renderWithRouter(<NoMatch />);
        expect(screen.getByTestId('NoMatch')).toBeInTheDocument();
    });

    it('displays the correct header text', () => {
        renderWithRouter(<NoMatch />);
        expect(screen.getByText('Wrong URL')).toBeInTheDocument();
    });

    it('has a link to the home page', () => {
        renderWithRouter(<NoMatch />);
        const homeLink = screen.getByRole('link');
        expect(homeLink).toHaveTextContent('Go to the home page');
        expect(homeLink.getAttribute('href')).toBe('/');
    });

    it('has the correct class for NoMatch', () => {
        renderWithRouter(<NoMatch />);
        const noMatchDiv = screen.getByTestId('NoMatch');
        expect(noMatchDiv).toHaveClass('noMatch');
    });

    it('matches snapshot', () => {
        const { asFragment } = renderWithRouter(<NoMatch />);
        expect(asFragment()).toMatchSnapshot();
    });
});