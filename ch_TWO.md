# Props
Props allow us to pass information to a Component. 

# PropTypes (Type Checking)
In React there are attributes called "props" that can be of any type. The flexibility has both pros and cons. If a component utilizes a particular type, propTypes provides a solution to that. PropTypes defines type and which props are required. Two benefits: 
1. You can easily open up a component and check which props are required and what type they should be.
2. When things get messed up React will give you an awesome error message in the console, saying which props is wrong/missing plus the render method that caused the problem.

propType ex: 
```
import PropTypes from 'prop-types';

propTypes: {
  size: React.PropTypes.number,
  position: React.PropTypes.string.isRequired
}

```
# Passing Functions to Components 
(passing an event handler such as onClick) to a component)
Pass event handlers and other functions as props to child components: 
```
<button onClick={this.handleClick}>
```
### Binding
To give access to the parent component in the handler, you need to bind the function to the component instance. There are several ways to make sure functions have access to component attributes like this.props and this.state. 

-Bind in Constructor
```
class Foo extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('Click happened');
  }
  render() {
    return <button onClick={this.handleClick}>Click Me</button>;
  }
}

```
- Bind in Render
```
class Foo extends Component {
  handleClick() {
    console.log('Click happened');
  }
  render() {
    return <button onClick={this.handleClick.bind(this)}>Click Me</button>;
  }
}
```