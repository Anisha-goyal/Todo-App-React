import React, {Component} from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component{

  state = {
    todos:[
      {id:1, content:'Buy some milk'},
      {id:2, content:'Play mario kart'}
    ]
  }

  deleteTodo = (id) =>{
    // console.log(id);
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    })

    this.setState({
      todos:todos
    })
  }

  AddTodo = (todo) => {
    // console.log(todo);
    todo.id= Math.random();
    let todos = [...this.state.todos,todo];
    this.setState({
      todos:todos
    })
  }
 render(){
   return(
     <div className="todo-app container">
    <h1 className="center blue-text">Todo's</h1>
    <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
    <AddTodo addtodo={this.AddTodo}/>
     </div>
   );
 }
}


export default App;
