import { InfiniteRepoList } from './InfiniteRepoList';

export type Repo = any;

export interface IProps {
    repos: Repo[];
    next: () => void;
    hasMore: boolean;
    targetId?: string;
}


export default InfiniteRepoList;