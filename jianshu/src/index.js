<<<<<<< HEAD
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Globalstyle } from './style';
import './style';
import './statics/iconfont/iconfont.css';
import App from './App';


ReactDOM.render(
  <Fragment>
    <Globalstyle />
    <App />
  </Fragment>

  ,
  document.getElementById('root')
);

=======
import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

//jsx语法，如果在react项目中使用了jsx语法，就必须引入React 否则会报错。
ReactDOM.render(<TodoList />, document.getElementById('root'));
>>>>>>> d45e2d17ac33a926c06feaf390a795c44fdace23

