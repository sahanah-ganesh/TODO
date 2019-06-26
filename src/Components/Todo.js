import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick, completed, text, description, date }) => (
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
    <h6 className='todo-description'>
      { description }
    </h6>
    <h6 className='todo-date'>
      { date }
    </h6>
  </div>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}

export default Todo