import React from "react";
import { createStore } from "redux";
import todoApp from "./reducer-example";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";

let store = createStore(todoApp);
 
render(
   <Provider store={store}>
       <App />
   </Provider>,
   document.getElementById("root")
);