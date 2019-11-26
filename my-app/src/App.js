import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import About from './components/pages/About';
import AddTodo from './components/AddTodo';

import './App.css';

// function component: creating a component without using 
// a class but instead a literal js function
function App() {
  
  // return jsx
  return (
    <Router>
    <div className="App">
      <div className = "container">
        <Header />
        {/* <AddTodo /> */}
        {/* embeds Todos component
            Taking the todos from the state and
            passing it into the Todos component as 
            a prop.  
        */}
        {/* <Todos todos={Todos.state.todos}/> */}
        <Route exact path = "/" render = {props => (
          <React.Fragment>
              <Todos />
          </React.Fragment>
        )}>
        </Route>
        <Route path = "/about" component = {About} />
      </div>

    </div>
    </Router>
  );
}

export default App;
