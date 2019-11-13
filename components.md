# What are components?
Components are the building blocks of any React app and a typical React app will have many of these. Simply put, a component is a JavaScript class or function that optionally accepts inputs i.e. properties(props) and returns a React element that describes how a section of the UI (User Interface) should appear.

## The simplest way to define a component
"function component"
```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
- This function returns a React element

Using ES6 to define a component
```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
