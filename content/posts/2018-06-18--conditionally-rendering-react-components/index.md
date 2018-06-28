---
title: Conditionally Rendering React Components 
subTitle: What condition your condition is in
category: "React.js"
cover: conditionally-render-cover.jpg
---

In React we often need to show or hide a component based on a given condition. I call this _Part 1_ because I will be reviewing the 4 techniques outlined in the React docs and their use cases. At the end, I will outline more sophisticated patterns you may encounter to be covered in _Part 2_.

If you are familiar with control flow and conditional statements from Javascript, you are probably asking yourself, "Can I conditionally render React Components in JSX while defining UI components?" Great news, the answer is yes, you can.

<iframe src="https://giphy.com/embed/l3q2Z6S6n38zjPswo" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/reactionseditor-guy-celebrate-l3q2Z6S6n38zjPswo">via GIPHY</a></p>

## When would you want to do this?

There are many, many use cases, but for clarity, here are some examples:

* Your site displays one greeting for guests, and another for logged in users
* In your ToDo list, when an item is in an “edit” state, render a text input. Otherwise show the ToDo list item text
* If a user is viewing an item that they have created, show a “delete” button, otherwise do not
* Render a Loading icon
* Return a list of items, or a message that says “No Items yet! Add your first item now!” if the list is empty
* Many, many others

## Without further ado, conditionally rendering React Components:

## 1. If Statement

```javascript
function ReturnVisit(props) {
  return <h1>Welcome back to our site!</h1>;
}

function FirstTime(props) {
  return <h1>Thanks for visiting, please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <ReturnVisit />;
  }
  return <FirstTime />;
}

ReactDOM.render(<Greeting isLoggedIn={false} />, document.getElementById("root"));
```

This is the most basic way to conditionally render components. It is verbose and not eloquent, but it is clear and useful for beginners.

## 2. Ternary: Inline If-Else with Conditional Operator

```javascript
render() {
    const isLoggedIn = this.state.isLoggedIn;
        return (
            <div>
                The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
            </div>
            );
    }
```

This is more concise than an if-else statement, and is therefore preferable. It can be confusing when handling more complicated logic.

## 3. Short Circuit Operator: Inline If with Logical && Operator

A short circuit operator is one that doesn't necessarily evaluate all of its operands (&& and also ||). When you want to render either something or nothing, use the && operator. For example, if a component is still loading, you would want to render the loading bar, otherwise you would not want to render any loading bar.

```javascript
class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { hasMounted: false };
  }

  componentDidMount() {
    this.setState({ hasMounted: true });
  }

  render() {
    return (
      <div>
        <p>This text is rendered on the server.</p>
        {this.state.hasMounted && <p>This text only appears after mounting.</p>}
      </div>
    );
  }
}
```

Use it when one side of the ternary operation would return null

<iframe src="https://giphy.com/embed/d3esZCZswxLI8UOA" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/ufc-sport-d3esZCZswxLI8UOA">via GIPHY</a></p>

## 4. Prevent Component from Rendering

```javascript
function AlertDiv(props) {
  if (!props.alert) {
    return null;
  }

  return <div className="alert">Alert!</div>;
}
```

## Why would you want to do this?

One advantage of returning null instead of an empty element is that you’ll slightly improve the performance of your app because React won’t have to unmount the component to replace it.

## Others you may encounter:

* IIFE
* Switch Statement
* JSX Control Statements (NPM Package)
* Higher Order Components
* babel-plugin-transform-do-expressions

## Sources:

[React Docs](https://reactjs.org/docs/conditional-rendering.html)<br>
[Conditional Rendering in React](https://www.robinwieruch.de/conditional-rendering-react/)<br>
[Conditional Rendering in React 2](https://blog.logrocket.com/conditional-rendering-in-react-c6b0e5af381e)
