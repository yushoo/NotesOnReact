# Hooks
What are hooks in React.js? 
They allow states and other React features to be used without writing a class. You can use a state in a functional based component. 

There are two common kinds of side effects in React components: those that don't require cleanup and those that do. 

Running some additional code after React has updated the DOM. 

### useState 

### useEffect
```javascript
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
- By using this hook, you tell React that your component needs to do something after render. React will remember the function you passed, and call it later after performing the DOM udates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API. 
