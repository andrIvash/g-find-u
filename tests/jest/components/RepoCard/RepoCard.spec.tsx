import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RepoCard from '../../../../src/components/RepoCard';
import { repoCardMockData } from  '../../../mocks/repoCardMockData';

describe('RepoCard Component', () => {
    it('renders without crashing', () => {
        render(<RepoCard {...repoCardMockData} />);
        expect(screen.getByText('Test Repo')).toBeInTheDocument();
    });

    it('displays correct stars count', () => {
        render(<RepoCard {...repoCardMockData} />);
        expect(screen.getByText('10')).toBeInTheDocument();
    });

    it('displays fork indication when isFork is true', () => {
        render(<RepoCard {...repoCardMockData} isFork={true} />);
        expect(screen.getByText("it's Fork")).toBeInTheDocument();
    });

    it('does not display fork indication when isFork is false', () => {
        render(<RepoCard {...repoCardMockData} />);
        expect(screen.queryByText("it's Fork")).toBeNull();
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<RepoCard {...repoCardMockData} />);
        expect(asFragment()).toMatchSnapshot();
    });
});