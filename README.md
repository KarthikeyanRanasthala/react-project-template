# React Project Template

## Instructions

1. Install the necessary dependencies.

```
npm install
```

2. To start the development server, execute the following command.

```
npm start
```

3. To start the cypress test, execute the following command.

```
npm test
```

4. To start the production build, execute the following command.

```
npm run build
```


## Dependencies

- [Axios](https://github.com/axios/axios)
- [PropTypes](https://github.com/facebook/prop-types)
- [React Redux](https://github.com/reduxjs/react-redux)
- [React Router DOM](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
- [Redux](https://github.com/reduxjs/redux)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)

## Developer Dependecies

- [Cypress](https://github.com/cypress-io/cypress)
- [Husky](https://github.com/typicode/husky)
- [Lint Staged](https://github.com/okonet/lint-staged)
- [Prettier](https://github.com/prettier/prettier)

## Using Axios

We've implemented interceptors to automatically log the API requests and responses through axios in development environment. So, you need to import the custom axios instance instead of directly importing from the axios package.

```js
import axios from "./utils/axiosInterceptor"
```

In `./utils/axiosInterceptor.js`, change the <Base_URL> to your backend server's base url. For example, `http://127.0.0.1:5000` for flask.

## Using ErrorBoundary

Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. 

```js
import ErrorBoundary from "../components/common/ErrorBoundary"

const App = () => {
  return (
    <div>
      <p>Hello, React!</p>
      <ErrorBoundary>
        <SomeComponent>
      </ErrorBoundary>
    </div>
  )
}
```

You may wrap top-level route components to display a “Something went wrong” message to the user or you may also wrap individual components in an error boundary to protect them from crashing the rest of the application.

## Using PropTypes

React has some built-in typechecking abilities. To run typechecking on the props for a component,you can assign the special `propTypes` property.

```js
import PropTypes from 'prop-types';

class Greetings extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { name } = this.props 
    return (
      <h1>Hello, {name}</h1>
    )
  }
} 

Greeting.propTypes = {
  name: PropTypes.string
}
```

## Using Redux

A typical redux setup should have the following files in their respective folder.

1. `actionsTypes.js`, to declare your different actions in redux. Like [this](src/redux/authentication/actionTypes.js).

2. `actions.js`, to write your actions. Like [this](src/redux/authentication/actions.js).

3. `reducer.js`, to manage your reducer's state. Like [this](src/redux/authentication/reducer.js).

Once it's done, you've to import the reducer to `store.js` and use it in the `combineReducers`.

Note: `Redux DevTools` is already setup for development and production. You can download the extension for your browser.

## Using React Hooks

Refer the detailed [documentation](https://reactjs.org/docs/hooks-intro.html).

### React Router DOM with Hooks

Refer the detailed [documentation](https://reacttraining.com/react-router/web/api/Hooks).


## Using Cypress

Refer the detailed [documentation](docs/cypress.md).

## Useful Visual Studio Code Extensions

- [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

## General Guidelines

1. Always de-structure your state & props before using them. Refer to [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) for reference.

2. Use propTypes for all your props to ensure type-checking. Refer to [React Docs](https://reactjs.org/docs/typechecking-with-proptypes.html) for reference.

3. Async updates to redux must be handled through redux-thunk.

4. Individual components should be styled using `css modules`. Refer to [CRA Docs](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/) for reference.

5. Always handle error in promises with `catch` method.