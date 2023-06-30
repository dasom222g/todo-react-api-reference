import React, { useState } from 'react';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';

const Home = () => {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (item) => {
    setTodoList([...todoList, item]);
  };

  const completeTodo = (id) => {
    const result = todoList.map((todo) => {
      return todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo;
    });
    setTodoList(result);
  };

  const deleteTodo = (id) => {
    const filterTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(filterTodoList);
  };

  return (
    <>
      <header>
        <h2 className="todo__title">
          세상을 바꾸는건 꿈을 꾸고 도전하는 사람들의 몫이다
        </h2>
      </header>
      <TodoInput addTodo={addTodo} />
      <TodoList
        todoList={todoList}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
};

export default Home;
