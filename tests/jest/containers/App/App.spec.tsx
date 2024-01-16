import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import '@testing-library/jest-dom';
import App from '../../../../src/containers/App';

jest.mock('../../../../src/containers/HomePage', () => () => <div>HomePage Mock</div>);
jest.mock('../../../../src/components/NoMatch', () => () => <div>NoMatch Mock</div>);

describe('App Component', () => {
    it('renders HomePage at root route', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <App />
            </MemoryRouter>
        );
        expect(screen.getByText('HomePage Mock')).toBeInTheDocument();
    });


    it('renders NoMatch at an undefined route', () => {
        render(
            <MemoryRouter initialEntries={['/random']}>
                <App />
            </MemoryRouter>
        );
        expect(screen.getByText('NoMatch Mock')).toBeInTheDocument();
    });

    it('matches snapshot', () => {
        const { asFragment } = render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});