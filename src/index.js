import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './utils/reduxStore';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import './css/custom.scss'
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

