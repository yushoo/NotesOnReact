import React from 'react';
import Todos from './components/Todos';

import './App.css';

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
