import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//uses npm sowpods-five to obtain a dictionary of 5 letter words to use for the application
const possibleWords = require('sowpods-five')
//Randomly selects a word from the list to use for the correct word in the application
const correctWord = possibleWords[Math.floor(Math.random() * possibleWords.length)].toUpperCase()
console.log(correctWord)

//Renders App with the correct word and dictionary passed into the app
ReactDOM.render(
  <React.StrictMode>
    <App correctWord={correctWord} dictionary={possibleWords}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
