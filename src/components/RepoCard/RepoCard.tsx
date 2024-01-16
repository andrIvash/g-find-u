import React from 'react';
import Typography from '@mui/material/Typography';
import { Props, defaultLangColor } from './index';

import './RepoCard.scss';

export const RepoCard = (props: Props) => {
    const {
        title,
        repoLink,
        isFork,
        stars,
        desc,
        logoColor,
        lang,
        time,
        className} = props;
    return (
        <section className={`repoCard ${className ? className : ''}`}>
            <header className='repoCard__header'>
                <div className='repoCard__headerLeft'>
                    <h3 className='repoCard__title'>
                        <Typography className='repoCard__linkWrapper'>
                            <a 
                                className='repoCard__link'
                                target='_blank'
                                rel='noreferrer'
                                href={`${repoLink ? repoLink : '#'}`}>
                                    {title}
                            </a>
                        </Typography>
                    </h3>
                    {isFork && <div className='repoCard__fork'>   
                        {`it's Fork`}
                    </div>}
                </div>
                <div className='repoCard__headerRight'>
                    <a className='visually-hidden' href='#'>
                        <span className='repoCard__stars'>{stars ? stars : 0}</span>
                        <svg className='octicon octicon-star' aria-label='star' height='16' role='img' version='1.1' viewBox='0 0 14 16' width='14'>
                            <path fillRule='evenodd' d='M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z'></path>
                        </svg>
                    </a>
                </div>
            </header>
            <main className='repoCard__main'>
                <p className='repoCard__desq'>{desc}</p>
            </main>
            <footer className='repoCard__footer'>
                <span
                    className='repoCard__lang-logo'
                    style={{ backgroundColor: logoColor ? logoColor : defaultLangColor }}></span>
                <span className='repoCard__lang'>{lang}</span>
                <span className='repoCard__time'>Updated: {time}</span>
            </footer>
      </section>
    )
}