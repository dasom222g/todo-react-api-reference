import React, { useState } from 'react';

const TodoInput = ({ addTodo }) => {
  // logic
  const [inputValue, setInputValue] = useState('');

  const reset = () => {
    setInputValue('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // set item
    const newItem = {
      id: Date.now(),
      text: inputValue,
      isComplete: false,
    };
    addTodo(newItem);

    // 초기화
    reset();
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };

  // view

  return (
    <section>
      <div className="form">
        <form action="/create" method="post" onSubmit={handleSubmit}>
          <div className="form-wrap">
            <input
              type="text"
              className="form__element"
              name="title"
              value={inputValue}
              placeholder="Write a new todo"
              onChange={handleChange}
            />
            <button className="form__button" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default TodoInput;
