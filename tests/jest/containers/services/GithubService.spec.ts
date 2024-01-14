import GithubService from '../../../../src/services/GithubService';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('GithubService', () => {
    let service: GithubService;
    let mock: MockAdapter;

    beforeAll(() => {
        service = GithubService.getInstance();
        mock = new MockAdapter(axios);
    });

    it('is a singleton', () => {
        const instance1 = GithubService.getInstance();
        const instance2 = GithubService.getInstance();
        expect(instance1).toBe(instance2);
    });

    it('initializes with a token', () => {
        service.init('test-token');
        expect(service.getGithubInstance().defaults.headers.common.Authorization).toBe('token test-token');
    });

    it('fetches users correctly', async () => {
        const mockResponse = { data: { items: [] } };
        mock.onGet('/search/users').reply(200, mockResponse);

        const response = await service.fetchUsers('test');
        expect(response.data).toEqual(mockResponse);
    });

    it('fetches repos correctly', async () => {
        const mockResponse = { data: [] };
        mock.onGet('/users/test-user/repos').reply(200, mockResponse);

        const response = await service.fetchRepos('test-user');
        expect(response.data).toEqual(mockResponse);
    });
});

describe('GithubService Negative Tests', () => {
    let service: GithubService;
    let mock: MockAdapter;

    beforeAll(() => {
        service = GithubService.getInstance();
        mock = new MockAdapter(axios);
    });

    it('warns when initialized without a token', () => {
        console.warn = jest.fn();
        service.init('');
        expect(console.warn).toHaveBeenCalledWith('The API token has not been provided');
    });

    it('handles fetchUsers with invalid search parameter', async () => {
        mock.onGet('/search/users').reply(400); // Bad Request

        await expect(service.fetchUsers('')).rejects.toThrow();
    });

    it('handles fetchUsers with API failure', async () => {
        mock.onGet('/search/users').networkError();

        await expect(service.fetchUsers('test')).rejects.toThrow();
    });

    it('handles fetchRepos with invalid login', async () => {
        mock.onGet('/users/invalid-user/repos').reply(404); // Not Found

        await expect(service.fetchRepos('invalid-user')).rejects.toThrow();
    });

    it('handles fetchRepos with API failure', async () => {
        mock.onGet('/users/test-user/repos').networkError();

        await expect(service.fetchRepos('test-user')).rejects.toThrow();
    });
});