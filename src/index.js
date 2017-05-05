/**
 * React komponentų ar kitokio tipo failų importavimui
 * naudojama ES6 import sintaksė. Šis būdas naudojamas visoje aplikacijoje.
 * 
 * Plačiau: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
 */
import React from 'react';

/**
 * Absoliučiai importuojami moduliai guli /node_modules
 * direktorijoje.
 */
import ReactDOM from 'react-dom';

/**
 * Releatyviai importuojami moduliai guli /src direktorijoje,
 * tačiau mums reikia nurodyti, kad tai yra mūsų
 * aplikacijos moduliai - ./ (taškas, pasv. brūkšnys prieš pavad.)
 */
import App from './App';

/**
 * CSS failai, kaip ir SVG, PNG ir t.t. gali būti importuojami moduliuose.
 */
import './index.css';

/**
 * 
 * Pagrindinis aplikacijos komponentas App
 * čia keliauja į HTML dokumentą
 * ir įpaišomas į DOM elementą su ID - root
 * 
 * Plačiau: https://facebook.github.io/react/blog/2015/10/01/react-render-and-top-level-api.html
 */
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
