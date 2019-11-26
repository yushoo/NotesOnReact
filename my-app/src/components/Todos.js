import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
import AddTodo from './AddTodo';
class Todos extends Component {
    state = {
        todos: [
          {
            id: 1,
            title: 'take out the trash',
            completed: false
          },
          {
            id: 2,
            title: 'Dinner with friends',
            completed: false
          },
          {
            id: 3,
            title: 'meeting',
            completed: false
          }
        ]
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
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id
            !== id)] });
    }

    addTodo = (title) => {
        const newTodo = {
          id: 4,
          title: title,
          completed: false
        }
        this.setState({ todos: [...this.state.todos, newTodo]});
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
    todos: PropTypes.array.isRequired
}

export default Todos; 