import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../store/users';
import { fetchRepos } from '../../store/repos';
import { getIsUsersError, getIsUsersFetching, getUsers } from '../../store/users/selectors';
import { getIsReposError, getRepos } from '../../store/repos/selectors';
import Screen from '../Screen';
import SimpleButton from '../../components/common/SimpleButton';
import SimpleInput from '../../components/common/SimpleInput';
import StickyAccordion from '../../components/StickyAccordion';
import InfiniteRepoList from '../../components/InfiniteRepoList';
import { LOADER_MESSAGE, ERROR_LOADED_MESSAGE } from '../../resources/constants';
import { sanitize } from '../../utils';

import './HomePage.scss';

export const HomePage = () => {
    const dispatch = useDispatch();
    const isUsersFetching = useSelector(getIsUsersFetching);
    const isUsersError = useSelector(getIsUsersError);
    const isReposError = useSelector(getIsReposError);
    const users = useSelector(getUsers);
    const repos = useSelector(getRepos);
    const [value, setValue] = useState('');
    const [reposList, setReposList] = useState([]);
    const [selectedItem, setSelectedItem] = useState(undefined);

    const handleSearchPress = () => {
        if (value.length) {
            const sanitazed = sanitize(value);
            if (sanitazed) {
                dispatch(fetchUsers(sanitazed));
            }
        }
    }

    const onKeyDownHandler = (keyCode: number) => {
        if (keyCode === 13) {
            handleSearchPress();
        }    
    }

    const onSearchStringChange = (value: string) => {
        setValue(value);
    };

    const onChangeExpanded = (name: string) => {
        if (name !== selectedItem) {
            setReposList([]);
            setSelectedItem(name);
            fetchMoreRepos(name);
        }
    }

    const fetchMoreRepos = (name: string, page?: number) => {
        dispatch(fetchRepos(name, page));
    };

    const renderReposContent = useCallback(
        (targetId: string) => {
            return (
                <InfiniteRepoList
                    repos={reposList}
                    next={() => fetchMoreRepos(selectedItem, repos.page + 1)}
                    hasMore={repos.hasMore}
                    targetId={targetId}
                />
            );
        },
        [reposList, repos.page, repos.hasMore, selectedItem]
    );

    const searchLabel = useMemo(() => {
        let result = '...';
        if (value.length) {
            const sanitazed = sanitize(value);
            if (sanitazed) {
                result = sanitazed;
            }
        }
        return result;
    }, [value])

    useEffect(() => {
        if (repos.data.length) {
            setReposList(reposList.concat(repos.data));
        }
    }, [repos.data])

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
                        label={'Enter username'}
                        onKeyDown={onKeyDownHandler}
                    />
                    <SimpleButton
                        className='homePage__submit'
                        onClick={handleSearchPress}
                        label='Search'
                    />
                </div>
                <div className='homePage__content'>
                    <p>Showing users for <span className='homePage__searchName'>{searchLabel}</span></p>
                    {isUsersFetching ? LOADER_MESSAGE : undefined}
                    {isUsersError ? ERROR_LOADED_MESSAGE : undefined}
                    {isReposError ? ERROR_LOADED_MESSAGE : undefined}
                    {(!isUsersFetching && !isUsersError && !isReposError) && <StickyAccordion
                        items={users}
                        detailsHeight={350}
                        renderContent={renderReposContent}
                        onChangeExpanded={onChangeExpanded}
                    />}
                </div>
            </div>
        </Screen>
    );
};