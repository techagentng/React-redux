import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';



//Store global state 

//Action increament
const increment = () => {
  return {
    type: 'INCREAMENT'
  }
}
//Action decreament
const decreament = () => {
  return {
    type: 'DECREAMENT'
  }
}
//Reducer
const counter = (state=0, action) => {
  switch(action.type){
    case "INCREAMENT":
      return state + 1;
    case "DECREAMENT":
      return state - 1;
  }
}

let store = creaateStore(conter);
//Display store in the console
store.subscribe(() => console.log()store.getState())
//Dispatch
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
