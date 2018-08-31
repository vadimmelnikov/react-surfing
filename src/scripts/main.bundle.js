import React from 'react';
import { render } from 'react-dom';

import Router from './components/Router';
import fonts from "../fonts/stylesheet.css";
import style from "../styles/app.css";

render(<Router/>, document.querySelector('#root'));