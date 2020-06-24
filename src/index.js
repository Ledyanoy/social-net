import './index.css';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/state";


const reRenderer = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     stateAddPost={store.stateAddPost.bind(store)}
                     stateChangePostValue={store.stateChangePostValue.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>, document.getElementById('root')
    );
}

reRenderer(store.getState())

store.subscriber(reRenderer);






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
