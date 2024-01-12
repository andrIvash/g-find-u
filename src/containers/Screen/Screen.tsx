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
            <div className={`screen ${darkTheme ? "screen--dark" : ""}`}>
                <div className='screen__controls center '>
                    <div className='item'>
                        <img className='icon rotate' src={icons.react} /> React
                    </div>
                    <SimpleSwitch
                        checked={darkTheme}
                        onChange={toggleTheme}
                        leftLabel={<img className='icon' src={icons.sun} />}
                        rightLabel={<img className='icon' src={icons.moon} />}
                    />
                    <button onClick={toggleTheme}>
                        {darkTheme ? 'Light Theme' : 'Dark Theme'}
                    </button>
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