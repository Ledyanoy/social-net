import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {BrowserRouter} from "react-router-dom";

const reRenderer = (state, stateAddPost) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} stateAddPost={stateAddPost}/>
            </BrowserRouter>
        </React.StrictMode>, document.getElementById('root')
    );
}

export default reRenderer;


