import React from 'react';
import ReactDOM from 'react-dom';
import {AppStoreType, store} from './redux/reduxStore';
import {GlobalStyles} from './stylesGlobal/GlobalStyles';
import {ThemeProvider} from 'styled-components';
import App from './App';
import {myTheme} from './stylesGlobal/Theme.styled';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

ReactDOM.render(
  <ThemeProvider theme={myTheme}>
    <BrowserRouter>
      <Provider store={store}>
        <App/>
        <GlobalStyles/>
      </Provider>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);