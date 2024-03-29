import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import "./index.css";
import * as serviceWorker from './serviceWorker';
import emailjs from "emailjs-com";

ReactDOM.render(<App />, document.getElementById('root'));

emailjs.init(process.env.REACT_APP_EMAILJS_ID);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
