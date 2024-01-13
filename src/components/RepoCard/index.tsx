import { RepoCard } from './RepoCard';

export const defaultLangColor = '#f1e05';

export interface Props {
   title: string,
   repoLink: string,
   isFork: boolean,
   stars: number,
   desc: string,
   logoColor: string,
   lang: string,
   time: string
}

export default RepoCard;