export interface IGithubUsersResponce {
    data: {[key: string]: any}
}

export interface IUser {
    id: number,
    login: string,
    htmlUrl: string,
    reposUrl: string
}

export interface ISlice {
    users: IUser[]
    isFetching: boolean
    isError: boolean
}