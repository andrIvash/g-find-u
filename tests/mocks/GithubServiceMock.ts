const mockAxiosInstance = {
    get: jest.fn(),
    defaults: { headers: { common: {} } },
    create: jest.fn(() => mockAxiosInstance),
};

export const GithubServiceMock = {
    init: jest.fn(),
    fetchUsers: jest.fn(),
    fetchRepos: jest.fn(),
    getGithubInstance: jest.fn(),
    github: mockAxiosInstance,
    mockImplementation: jest.fn()
};

export const getInstanceMock = jest.fn(() => GithubServiceMock);