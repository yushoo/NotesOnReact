# PropTypes
In React there are attributes called "props" that can be of any type. The flexibility has both pros and cons. If a component utilizes a particular type, propTypes provides a solution to that. PropTypes defines type and which props are required. Two benefits: 
1. You can easily open up a component and check which props are required and what type they should be.
2. When things get messed up React will give you an awesome error message in the console, saying which props is wrong/missing plus the render method that caused the problem.

propType ex: 
```
propTypes: {
  size: React.PropTypes.number,
  position: React.PropTypes.string.isRequired
}

```