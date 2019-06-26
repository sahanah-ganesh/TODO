import { combineReducers } from 'redux';
import {
  ADD_TODO,
  TOGGLE_TODO,
  GET_TODOS,
  DELETE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from './action.js';
const { SHOW_ALL } = VisibilityFilters;

const initialState = {
  todos: []
}

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case GET_TODOS:
      return Object.assign({}, initialState, {
        todos: initialState.todos.concat(action.payload)
      })
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          description: action.description,
          date: action.date,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo;
      })
    case DELETE_TODO:
      return {
        ...state,
        delete: true
      }
    default:
      return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp;