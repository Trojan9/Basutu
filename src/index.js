import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StateProvider } from "./LoginComponents/StateProvider";
import reducer, { initialState } from "./LoginComponents/Reducer";
ReactDOM.render(
  <StateProvider initialState = {initialState}  reducer = {reducer} >
    <App />
  </StateProvider>,document.getElementById('root')
);

