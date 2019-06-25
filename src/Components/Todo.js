import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick, completed, text }) => (
  <div className='todo-item'>
    <h4
      onClick={ onClick }
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
      className='todo-title'
    >
      { text }
    </h4>
    <input
      className='todo-description'
      placeholder='Description'
      type={ event.target.value }
    />
  </div>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

export default Todo