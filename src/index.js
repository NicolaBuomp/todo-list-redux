import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import storeReducer from './reducers/index';
import { Provider } from 'react-redux';

let storeTodos = {
  todos:[
    {id:0, todo: 'Fare la spesa', completed: false},
    {id:1, todo: 'Completare cosro', completed: false},
    {id:2, todo: 'Imparare Redux', completed: false}
  ] 
};

if (localStorage.getItem('mytodolist')){
  const currentState = JSON.parse(localStorage.getItem('mytodolist'));
  if(currentState){
    storeTodos = currentState;
  }
};

const store = createStore(storeReducer, {...storeTodos},

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );
  
  store.subscribe(
    ()=> {
      const currentState = JSON.stringify(store.getState());
      localStorage.setItem('mytodolist', currentState);
    }
  );


ReactDOM.render(
    <Provider store = {store}>
      <App />
    </Provider>,
  document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
