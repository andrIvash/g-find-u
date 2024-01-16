import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { IProps } from './index';
import { LOADER_MESSAGE } from '../../resources/constants';
import RepoCard from '../RepoCard';

import './InfiniteRepoList.scss';

export const InfiniteRepoList = (props: IProps) => {
    const { repos, next, hasMore, targetId } = props;
    return (
        <InfiniteScroll
            className='iRepoList'
            dataLength={repos.length}
            next={next}
            hasMore={hasMore}
            loader={LOADER_MESSAGE}
            scrollableTarget={targetId ? targetId : `scrollableDiv`}
            style={{
                overflow: 'hidden'
            }}
        >
            {repos.map((repo, index) => (
                <RepoCard
                    className='iRepoList__repoCard'
                    key={`${repo.link}${index}`}
                    title={repo.title}
                    repoLink={repo.repoLink}
                    isFork={repo.isFork}
                    stars={repo.stars}
                    desc={repo.desc}
                    logoColor={repo.logoColor}
                    lang={repo.lang}
                    time={repo.time}
                />
            ))}
        </InfiniteScroll>
    );
};

export default InfiniteRepoList;