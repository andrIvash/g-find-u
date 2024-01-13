import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import Screen from '../Screen';
import SimpleButton from '../../components/common/SimpleButton';
import SimpleInput from '../../components/common/SimpleInput';
import RepoCard from '../../components/RepoCard';

import './HomePage.scss';

const sample = "testttt"

export const HomePage = () => {
    const [value, setValue] = useState<string>("");
    const onSearchStringChange = (value: string) => {
        console.log('value', value);
        setValue(value)
    };

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
                        onClick={() => {console.log('click');}}
                        label='Search'
                    />
                </div>
                <div className='homePage__content'>
                    <p>Showing users for {sample}</p>
                    <RepoCard
                        title={'excercises'}
                        repoLink={'https://github.com/andrIvas/excercises'}
                        isFork={true}
                        stars={1}
                        desc={'Interview tasks, interesting things'}
                        logoColor={'blue'}
                        lang={'Javascript'}
                        time={'15.10.2018'}
                    />
                </div>
            </div>
        </Screen>
    );
};