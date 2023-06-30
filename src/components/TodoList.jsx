import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todoList, completeTodo, deleteTodo }) => {
  return (
    <section>
      <ul className="todo__list">
        {todoList.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
