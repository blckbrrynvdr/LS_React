export const ADD_TODO = "ADD_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text
        }
      ]
    default:
      return state;
  }
}

function visibilityFilter(state = "SHOW_ALL", action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function todoApp(state = {}, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  };
}

export default todoApp;
