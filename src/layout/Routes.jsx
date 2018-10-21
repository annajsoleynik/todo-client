import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../modules/pages/home';

import TodoList from '../modules/todo/list/todoList';
import TodoView from '../modules/todo/view/todoView';
import AddTodoView from '../modules/todo/view/addTodoView';

import About from '../modules/pages/about';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />

      <Route exact path="/todos" component={TodoList} />
      <Route exact path="/add-todo" component={AddTodoView} />
    <Route exact path="/todo/:todoId" component={TodoView} />
  </Switch>
);

export default Routes;
