import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import InfiniteRepoList from '../../../../src/components/InfiniteRepoList';

jest.mock('../../../../src/components/RepoCard', () => ({ title }) => (
    <div data-testid='mock-repo-card'>{title}</div>
));

describe('InfiniteRepoList Component', () => {
    const mockRepos = [
        { title: 'Repo 1' },
        { title: 'Repo 2' },
    ];

    it('renders without crashing', () => {
        render(<InfiniteRepoList repos={mockRepos} next={jest.fn()} hasMore={true} />);
        expect(screen.getByText('Repo 1')).toBeInTheDocument();
    });

    it('renders the correct number of RepoCard components', () => {
        render(<InfiniteRepoList repos={mockRepos} next={jest.fn()} hasMore={true} />);
        const cards = screen.getAllByTestId('mock-repo-card');
        expect(cards.length).toBe(mockRepos.length);
    });

    it('passes correct props to RepoCard components', () => {
        render(<InfiniteRepoList repos={mockRepos} next={jest.fn()} hasMore={true} />);
        expect(screen.getByText('Repo 1')).toBeInTheDocument();
        expect(screen.getByText('Repo 2')).toBeInTheDocument();
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<InfiniteRepoList repos={mockRepos} next={jest.fn()} hasMore={true} />);
        expect(asFragment()).toMatchSnapshot();
    });
});