import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js'
import 'semantic-ui-css/semantic.min.css'
// import Header from './components/header/Header.js';


ReactDOM.render(<App />, document.querySelector('#root'));

//rtl page
//   document.getElementsByTagName('html')[0].setAttribute("dir", "rtl");