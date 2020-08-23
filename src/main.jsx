import 'bootswatch/dist/materia/bootstrap.min.css';
import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/styles/main.scss';
import './assets/styles/icons.min.css';
import animation from './utils/backgroundAnimation';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

animation();
