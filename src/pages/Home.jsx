import React, { useEffect, useState } from 'react';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
// import { header } from '../lib/utils';

const Home = () => {
  const [todoList, setTodoList] = useState([]);

  const addTodo = async (item) => {
    // post
    const response = await fetch('/todos', {
      method: 'POST',
      body: JSON.stringify(item),
    });
    const result = await response.json();
    console.log('🚀 : result==>', result);

    setTodoList([...todoList, result]);
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

  const getData = async () => {
    const data = await fetch('/todos');
    const result = await data.json();
    result && setTodoList(result);
  };

  useEffect(() => {
    getData();
  }, []);

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
      <button type="button" onClick={getData}>
        api 테스트
      </button>
    </>
  );
};

export default Home;
