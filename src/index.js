import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthProvider } from './context/auth';
import { theme } from "loft-taxi-mui-theme"; 
import { MuiThemeProvider } from "@material-ui/core/styles";



import { createStore } from "redux";
import reducer, { ADD_TODO, SET_VISIBILITY_FILTER } from "./reducer-example";
 
const addTodo = text => ({
   type: ADD_TODO,
   text
});
 
const setVisibilityFilter = filter => ({
   type: SET_VISIBILITY_FILTER,
   filter
});
 
const store = createStore(reducer);
 
store.subscribe(() => {
   console.log(store.getState());
});
 
store.dispatch(addTodo("Помыть посуду"));
store.dispatch(addTodo("Постирать одежду"));
store.dispatch(addTodo("Погулять с собакой"));
store.dispatch(addTodo("Выучить реакт"));
 
store.dispatch(setVisibilityFilter("ONLY_COMPLETED"));




ReactDOM.render( 
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);