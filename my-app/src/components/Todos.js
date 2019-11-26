import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
import AddTodo from './AddTodo';
import uuid from 'uuid';
import axios from 'axios';
class Todos extends Component {
    state = {
        todos: [
          
        ]
      }
    
     //lifecycle method
     componentDidMount() {
       //.get will return promise
       axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(res => this.setState({ todos: res.data }))
     }
     
    // custom methods do not have access to Component
    // toggle the css. id passed in from todo.js when markCompleted is called
    markComplete = (id) => {
        this.setState({ todos: this.state.todos.map(todo => {
            // find the correct todo by iterating through the array of todos
            if(todo.id == id){
                todo.completed = !todo.completed;
            }
            return todo; 
        }) });
    }

    // Delete Todo
    // copy everything that is already there except for the one being deleted
    // use the spread operator
    delTodo = (id) => {
        axios.delete('https://jsonplaceholder.typicode.com/todos/${id}')
          .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id
            !== id)] }));

        ;
    }

    addTodo = (title) => {
        // const newTodo = {
        //   id: uuid.v4(),
        //   title: title,
        //   completed: false
        // }
        axios.post('https://jsonplaceholder.typicode.com/todos', {
          title,
          completed: false
        })
          .then(res => this.setState({ todos: 
            [...this.state.todos, res.data]}));
    }


    render() {
        // can't cycle through props because state is within Todos.
        // so there is no need to send in the state as a property
        return (
            <div>
              <AddTodo addTodo = {this.addTodo}/>
              {this.state.todos.map((todo) => (
                <div>
                  <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    markComplete={this.markComplete} 
                    delTodo={this.delTodo}
                  />
                  {/* <h3>{ todo.title }</h3> */}
                </div>
              ))}
          </div>
        );
    }
}

// PropTypes
Todos.propTypes = {
    todos:        PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo:      PropTypes.func.isRequired,
}

export default Todos; 