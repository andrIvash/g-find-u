
export interface IGithubReposResponse {
    data: { [key: string]: any },
    headers: any
}

export interface IRepo {
    title: string,
    repoLink: string,
    isFork: boolean,
    stars: number,
    desc: string,
    logoColor: string,
    lang: string,
    time: string
}

export interface IReposSlice {
    data: IRepo[],
    page: number,
    hasMore: boolean
}

export interface ISlice {
    repos: IReposSlice,
    isFetching: boolean,
    isError: boolean
}