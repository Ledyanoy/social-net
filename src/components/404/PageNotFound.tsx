import React from 'react';
// @ts-ignore
import {title, description} from './PageNotFound.module.css'

const PageNotFound: React.FC = () => {
    return (
        <div>
            <p className={title}>404</p>
            <p className={description}>Такой страницы нет</p>
        </div>
    )
}

export default PageNotFound;
