import React from 'react';
import Filter from './Filter.js';
import AddTodo from '../Containers/AddTodo.js';
import VisibleTodoList from '../Containers/VisibleTodoList.js';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Filter />
  </div>
)

export default App
