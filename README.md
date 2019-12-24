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

- [Husky](https://github.com/typicode/husky)
- [Lint Staged](https://github.com/okonet/lint-staged)
- [Prettier](https://github.com/prettier/prettier)

## Using Axios

We've implemented interceptors to automatically log the API requests and responses through axios in development environment. So, you need to import the custom axios instance instead of directly importing from the axios package.

```js
import axios from "./data/axiosInterceptor"
```