import React from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

import './App.css';

// function component: creating a component without using 
// a class but instead a literal js function
function App() {
  
  // return jsx
  return (
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
        <Todos />
      </div>

    </div>
  );
}

export default App;
