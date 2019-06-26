export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const GET_TODOS = 'GET_TODOS';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

let nextTodoId = 0;
export function addTodo(text, description, date) {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text,
    description,
    date
  }
}

export function toggleTodo(id) {
  return { type: TOGGLE_TODO, id }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}

export function getTodos() {
  return function(dispatch) {
    return fetch('http://localhost:3004/todos')
      .then(response => response.json())
      .then(json => {
        dispatch({ type: 'TODOS_LOADED', payload: json })
      })
  }
}