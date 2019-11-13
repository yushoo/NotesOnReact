# React State
- Components can have state which is an object that determines how that component renders and behaves. 
- We can also have "application level" state by using a state manager like Redux or Reacts own context API.
    - "Application level" : data that needs to be shared with multiple components. Redux is a state manager. 
```
state = {
    title: 'xxx'
    body: 'xxx'
    isFeatured: true
}
```

# Create-React-App
- CLI(command line interface) Tool for creating React applications. (Boilerplate like)
- Uses Webpack but needs no configuration from you
- Comes bundled with a dev server with hot reload so it will auto reload whenever you save. Similar to nodemon
- "npm run build" will compile all your code to something that the browser can read

# Anatomy of a Component
```
Class Post extends React.Component {
    state = {
        title: 'Post One',
        body: 'This is my post'
    }

    render() {
        return {
            <div>
                <h3>{ this.state.title }</h3>
                <p></p>
            </div>
        }
    }
}
```
## Render is a life-cycle method. What are React lifecycle methods?
- You can think of React lifecycle methods as the series of events that happen from the birth of a React component to its death. Every component in React goes through a lifecycle of events. You can think og them as going through a cycle of birth, growth, and death.
- Mounting - Birth of your component
- Update - Growth of your component
- Unmount- Death of your component 

#### Common React Lifecycle Methods 
- Render()
    - The render() method is the most used lifecycle method. You will see it in all React classes. This is because render() is the only required method within a class component in React. It handles the rendering of your component to the UI. It happens during the mounting and updating of your component. 
    - React requires that your render() is pure. Pure functions are those that do not ahve any side-effects and will always return the same output when the smae inputs are passed. This means that you can not setState() within a render(). 
- componentDidMount()

# Create React App
```
npx create-react-app my-app
cd my-app
npm start
```

# Info on the JSON File
### dependencies
```
"dependencies": {
    "react": "^16.11.0",
    "react-dom": "^16.11.0",
    "react-scripts": "3.2.0"
  }
```
- React is the library itself
- dom deals with loading components in the browser
- scripts deals with the dev server and allows us to test our application
### scripts
```
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
```
- start: starts our dev server
- build: compiles all of our code into something the browser can read

# How a react application is organized and rendered
- The entry point is index.html
```
<div id="root"></div>   // app component gets put here
```
- index.js is the entry point for react. It is usually located in the src folder.
```
ReactDOM.render(<App />, document.getElementById('root'));  // ReactDOM is rendering the App component into the element with the id 'root'
```

# Developer tools 
- React Developer Tools (Chrome Extension)
- Node for server for testing application