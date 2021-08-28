import React, { Component } from "react";
import { addTodo } from "./reducer-example";
import { connect } from "react-redux";
 
class TodosContainer extends Component {
  state = {
    inputValue: ""
  };
 
  // при изменении в инпуте пробрасываем в стейт компонента
  change = e => this.setState({ inputValue: e.target.value});
 
  // при нажатии на добавление тудушки
  onAddTodo = () => {
    // получем экшн аддтуду из пропсов, которые
    // прокидываются методом mapDispatchToProps ниже
    const { addTodo } = this.props;
    // inputValue (текст инпута) берем из стейта,
    // в который пробрасывали ранее
    const { inputValue } = this.state;
    // вызываем экшн адд туду из нашего настроенного стора
    addTodo(inputValue);
    // обнуляем стейт компонента
    this.setState({ inputValue: ""});
  };
 
  render() {
    // получаем наши тудухи из стора, они прокинуты в
    // пропсы компонента при помощи mapStateToProps
    // который передаст в компонент текущее состояние стора
    const { todos } = this.props;
    // связываем value инпута со стейтом компонента
    const { inputValue } = this.state;
    return (
      <div>
        <input onChange={this.change} value={inputValue} />
        <button onClick={this.onAddTodo}>Добавить</button>
        <ul>
          {todos.map((item, index) => (
            <li key={index + item}>{item.text}</li>
          ))}
        </ul>
      </div>
    );
  }
}
 
// Для использования connect() нужно определить 
// специальную функцию mapStateToProps(), которая
//  указывает, как трансформировать текущее 
// Redux-состояние хранилища в свойства, которые
//  будут переданы передать в компонент. В нашем
//  случае из общего состояния передаётся свойство todos:
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};
 
/*
Аналогичным образом с помощью функции mapDispatchToProps()
к свойствам добавляются действия для изменения состояния
(в нашем случае это генератор действий addTodo()):
*/
const mapDispatchToProps = dispatch => {
  return {
    addTodo: title => {
      dispatch(addTodo(title));
    }
  };
};
 /*
 Вызовом метода connect() , в который передаются 
 функции mapStateToProps() и mapDispatchToProps(), 
 создаётся экземпляр компонента TodosContainer:
 */
export default connect (
  mapStateToProps,
  mapDispatchToProps
)(TodosContainer);