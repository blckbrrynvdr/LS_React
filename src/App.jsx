import React from "react";
import { HomeWithAuth } from "./pages/Home";
import Welcome from "./pages/Welcome";
import "./App.css";
import { withAuth } from "./context/auth";
import PropTypes from "prop-types";




import { createStore } from "redux";
 
const reducer = (state = { todos: [] }, action) => {
   switch (action.type) {
       case "ADD_TODO":
           return { todos: [...state.todos, action.payload] };
       default:
           return state;
   }
};
 
const store = createStore(reducer);
 
store.subscribe(() => {
   console.log(store.getState());
});
 
store.dispatch({type: "ADD_TODO", payload: "Помыть посуду"});
store.dispatch({type: "ADD_TODO", payload: "Постирать одежду"});
store.dispatch({type: "ADD_TODO", payload: "Погулять с собакой"});
store.dispatch({type: "ADD_TODO", payload: "Выучить реакт"});




class App extends React.Component {

  static propTypes = {
    isLoggedIn: PropTypes.bool
  }

  render() {
    return (
      <>
        <h1>Hello World</h1>
        {/* {!this.props.isLoggedIn && <Welcome />}
        {this.props.isLoggedIn && <HomeWithAuth />} */}
      </>
    );
  }
}

export default withAuth(App);
