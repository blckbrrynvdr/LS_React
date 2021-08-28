import { combineReducers } from "redux";

export const ADD_TODO = "ADD_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";


// редьюсер тудушек
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
// редьюсер фильтра
function visibilityFilter(state = "SHOW_ALL", action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}
// общий редьюсер, соберающий все остальные в одну кучу
// вариант без выкраутасов
function todoApp(state = {}, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  };
}
// // вариант с использованием combineReducers, по сути тоже самое
// // что и выше, позоляет сократить запись
// const todoApp = combineReducers({
//     todos,
//     visibilityFilter
//  });


// Генераторы действий
// Изначально выглядят как объекты
// const todoAction = {
//     type: "ADD_TODO",
//     payload: "Todo title text"
//  }

// но мы можем их записать как функции генераторы 
// для удобства использования, например 

// const ADD_TODO = "ADD_TODO";
 
// function addTodo(text) {
//    return {
//        type: ADD_TODO,
//        payload: text
//    };
// }

export const addTodo = text => ({
    type: ADD_TODO,
    text
 });
  
export const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    filter
 });

// экспортируем наш итоговый редьюсер
export default todoApp;
