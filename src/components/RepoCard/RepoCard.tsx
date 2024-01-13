import React from 'react';
import { Props, defaultLangColor } from './index';

import './RepoCard.scss';

export const RepoCard = (props: Props) => {
    return (
        <section className='repoCard'>
            <header className='repoCard__header'>
                <div className='repoCard__headerLeft'>
                    <h3 className='repoCard__title'>
                        <a 
                            className='repoCard__link'
                            target='_blank'
                            rel='noreferrer'
                            href={`${props.repoLink ? props.repoLink : "#"}`}>
                                {props.title}
                        </a>
                    </h3>
                    {props.isFork && <div className='repoCard__fork'>   
                        {`it's Fork`}
                    </div>}
                </div>
                <div className='repoCard__headerRight'>
                    <a className='visually-hidden' href="https://api.github.com/repos/andrIvas/excercises/stargazers">
                        <span className='repoCard__stars'>{props.stars ? props.stars : 0}</span>
                        <svg className="octicon octicon-star" aria-label="star" height="16" role="img" version="1.1" viewBox="0 0 14 16" width="14">
                            <path fillRule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path>
                        </svg>
                    </a>
                </div>
            </header>
            <main className='repoCard__main'>
                <p className='repoCard__desq'>{props.desc}</p>
            </main>
            <footer className='repoCard__footer'>
                <span
                    className='repoCard__lang-logo'
                    style={{ backgroundColor: props.logoColor ? props.logoColor : defaultLangColor }}></span>
                <span className='repoCard__lang'>{props.lang}</span>
                <span className="repoCard__time">Updated: {props.time}</span>
            </footer>
      </section>
    )
}