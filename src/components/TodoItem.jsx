import React from 'react';
import { GoCheck } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { TiEdit } from 'react-icons/ti';
import { RiCloseCircleLine } from 'react-icons/ri';

const TodoItem = ({ todo, completeTodo, deleteTodo }) => {
  // logic
  const { id, isComplete, text } = todo;

  const handleOnchage = () => {
    // porp으로 id 넘기기
    completeTodo(id);
  };

  const handleDelete = () => {
    // 여기부터야!!
    deleteTodo(id);
  };

  // view
  return (
    <>
      <li className="todo__item">
        {/* <div className='todo__content complete'> */}
        <div className={`todo__content ${isComplete ? 'complete' : ''}`}>
          <div className="todo__item-check">
            <label>
              <input type="checkbox" onChange={() => handleOnchage(id)} />
              <i className="todo__item-check-icon" />
              <GoCheck className="todo__item-check-icon complete" />
              <span className="todo__content-text">{text}</span>
            </label>
          </div>
          <div className="todo__item-buttonarea">
            <Link to={`/`} className="todo__item-button">
              <TiEdit className="todo__item-button-icon update" />
            </Link>
            <button
              type="button"
              className="todo__item-button"
              onClick={handleDelete}
            >
              <RiCloseCircleLine className="todo__item-button-icon delete" />
            </button>
          </div>
        </div>
      </li>
    </>
  );
};

export default TodoItem;
