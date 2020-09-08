import React from 'react';
import {title, description} from './PageNotFound.module.css'

const PageNotFound = () => {
    return (
        <div>
            <p className={title}>404</p>
            <p className={description}>Такой страницы нет</p>
        </div>
    )
}

export default PageNotFound;