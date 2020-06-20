import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const postsData= [
    {id: 1, message: `Hi, world!`, likesCount: 2},
    {id: 2, message: 'Bruh', likesCount: 1000},
    {id: 3, message: 'Falling in Reverse are cool!', likesCount: -100},
    {id: 3, message: 'Limp Bizkit', likesCount: 777},
];

ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
