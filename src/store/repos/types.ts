
export interface IGithubReposResponce {
    data: { [key: string]: any }
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

export interface ISlice {
    repos: IRepo[],
    isFetching: boolean,
    isError: boolean
}