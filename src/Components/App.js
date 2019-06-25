import React from 'react';
import Filter from './Filter.js';
import AddTodo from '../Containers/AddTodo.js';
import VisibleTodoList from '../Containers/VisibleTodoList.js';
import '../Styles/App.css';

const App = () => (
  <div className='App'>
    <h1>TO DO LIST</h1>
    <AddTodo />
    <Filter />
    <VisibleTodoList />
  </div>
)

export default App
