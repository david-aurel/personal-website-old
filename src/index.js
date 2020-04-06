import React from 'react';
import { render } from 'react-dom';
import App from './App';
import data from '../public/data';

render(<App data={data} />, document.querySelector('#root'));
