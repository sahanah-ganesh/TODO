import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../Modules/action.js';

const AddTodo = ({ dispatch }) => {
  let input1
  let input2
  let input3

  return (
    <div>
      <form
        className='form'
        onSubmit={e => {
          e.preventDefault()
          if (!input1.value.trim() || !input2.value.trim() || !input3.value.trim()) {
            return
          }
          dispatch(addTodo(input1.value, input2.value, input3.value))
          input1.value = ''
          input2.value = ''
          input3.value = ''
      }}>
        <input
          type='text'
          className='input-title'
          placeholder='Title'
          ref={ node => input1 = node }
          />
        <input
          type='text'
          className='input-description'
          placeholder='Description'
          ref={ node => input2 = node }
          />
          <br/>
        <input
          type='date'
          className='input-date'
          placeholder='Date'
          ref={ node => input3 = node }
          />
        <button className='add-todo' type='submit'>
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)