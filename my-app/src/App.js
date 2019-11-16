import React from 'react';
import Todos from './components/Todos';

import './App.css';

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


// function component: creating a component without using 
// a class but instead a literal js function
function App() {

  // return jsx
  return (
    <div className="App">
      {/* embeds Todos component */}
      <Todos />
    </div>
  );
}

export default App;
