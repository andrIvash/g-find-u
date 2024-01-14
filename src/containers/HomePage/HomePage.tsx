import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../store/users';
import { fetchRepos } from '../../store/repos';
import { getIsUsersError, getIsUsersFetching, getUsers } from '../../store/users/selectors';
import { getIsReposError, getIsReposFetching, getRepos } from '../../store/repos/selectors';
//import { Link } from 'react-router-dom';
import Screen from '../Screen';
import SimpleButton from '../../components/common/SimpleButton';
import SimpleInput from '../../components/common/SimpleInput';
import RepoCard from '../../components/RepoCard';

import './HomePage.scss';

const sample = "testttt"

export const HomePage = () => {
    const dispatch = useDispatch();
    const isUsersFetching = useSelector(getIsUsersFetching);
    const isUsersError = useSelector(getIsUsersError);
    const isReposFetching = useSelector(getIsReposFetching);
    const isReposError = useSelector(getIsReposError);
    const users = useSelector(getUsers);
    const repos = useSelector(getRepos);
    const [value, setValue] = useState<string>("");

    const handleSearchPress = () => {
        if (value.length) {
            dispatch(fetchUsers(value))
        }
    }
    

    const onSearchStringChange = (value: string) => {
        setValue(value)
    };

    useEffect(() => {
        if (users.length) {
            dispatch(fetchRepos(users[0].login))
        }
    }, [users]);

    return (
        <Screen>
            <div
                className='homePage'
                data-testid='HomePage'
            >
                <div className='homePage__search'>
                    <SimpleInput
                        className='homePage__searchInput'
                        onChange={onSearchStringChange}
                        value={value}
                        label={"Enter username"}
                    />
                    <SimpleButton
                        className='homePage__submit'
                        onClick={handleSearchPress}
                        label='Search'
                    />
                </div>
                <div className='homePage__content'>
                    <p>Showing users for {sample}</p>
                    {repos && repos.length ? <RepoCard
                        title={repos[0].title}
                        repoLink={repos[0].repoLink}
                        isFork={true}
                        stars={repos[0].stars}
                        desc={repos[0].desc}
                        logoColor={repos[0].logoColor}
                        lang={repos[0].lang}
                        time={repos[0].time}
                    /> : undefined}
                    {isUsersFetching || isReposFetching ? 'LOADING DATA...' : undefined}
                    {isUsersError || isReposError ? 'ERROR LOADING DATA...' : undefined}
                    {JSON.stringify(users)}
                </div>
            </div>
        </Screen>
    );
};