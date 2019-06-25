import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../Modules/action.js';

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input type='text' className='input-todo' ref={ node => input = node } />
        <button id='add-todo' className='add-todo' type='submit'>
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)