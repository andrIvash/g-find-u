import { BASE_URL } from '../resources/constants';
import axios, { AxiosInstance } from 'axios';
import { IGithubUsersResponse } from '../store/users/types';
import { IGithubReposResponse } from '../store/repos/types';

export default class GithubService {
    private token: string;
    private static instance: GithubService;
    private github: AxiosInstance;
    private defaultParams = {
        per_page: 5,
    };

    public static getInstance() {
        if (!this.instance) {
            this.instance = new GithubService();
        }
        return this.instance;
    }


    public init(token: string) {
        this.token = token;
        this.github = axios.create({
            baseURL: BASE_URL,
        });
        if (this.token) {
            this.github.defaults.headers.common.Authorization = `token ${token}`;
        } else {
            console.warn('The API token has not been provided');
        }
    }

    public async fetchUsers(search: string, params?: [{ [key: string]: string }]): Promise<IGithubUsersResponse> {
        return this.github.get('/search/users', {
            params: {
                ...this.defaultParams,
                q: search,
                ...params
            },
        })
    }

    public async fetchRepos(login: string, params?: { [key: string]: string }): Promise<IGithubReposResponse> {
        return this.github.get(`/users/${login}/repos`, {
            params: {
                ...this.defaultParams,
                ...params
            }
        })
    }

    public getGithubInstance() {
        return this.github
    }
}