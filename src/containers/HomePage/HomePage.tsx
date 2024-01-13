import React from 'react';
//import { Link } from 'react-router-dom';
import Screen from '../Screen';
import SimpleButton from '../../components/common/SimpleButton';

import './HomePage.scss';

const sample = "testttt"

export const HomePage = () => {
    return (
        <Screen>
            <div
                className='homePage'
                data-testid='HomePage'
            >
                <div className='homePage__search'>
                    <SimpleButton
                        className='homePage__submit'
                        onClick={() => {console.log('click');}}
                        label='Search'
                    />
                </div>
                <div className='homePage__content'>
                    <p>Showing users for {sample}</p>
                </div>
            </div>
        </Screen>
    );
};