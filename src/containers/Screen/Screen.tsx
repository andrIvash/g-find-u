import React, { useEffect } from 'react';
import { DarkThemeContext } from '../../context/darkThemeContext';
import { Props } from './';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SimpleSwitch from '../../components/common/SimpleSwitch';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { icons } from '../../components/common/Icons';

import './Screen.scss';

export const Screen = ({children}: Props) => {
    const [darkTheme, setDarkTheme] = useLocalStorage('dark-mode', false);
    
    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
    }
    
    useEffect(() => {
        if (darkTheme) {
          document.body.classList.add('dark-mode');
        } else {
          document.body.classList.remove('dark-mode');
        }
      }, [darkTheme]);

    return (
        <DarkThemeContext.Provider value={darkTheme}>
            <div className='screen' data-testid='Screen'>
                <div className='screen__controls'>
                    <SimpleSwitch
                        className='screen__simpleSwitch'
                        checked={darkTheme}
                        onChange={toggleTheme}
                        leftLabel={<img className='icon' src={icons.sun} />}
                        rightLabel={<img className='icon' src={icons.moon} />}
                    />
                </div>
                <Header />
                <div className='screen__content'>
                    {children}
                </div>
                <Footer />
            </div>
        </DarkThemeContext.Provider>
  );
};