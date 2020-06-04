import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './theme/global';
import { AppComponent } from './app.component';

const rootElement = document.querySelector('#root');

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <AppComponent />
  </React.StrictMode>,
  rootElement
);
