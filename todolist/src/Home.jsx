import React, { useState } from 'react';
import './App.css';

import Create from './Create'


function Home() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="home">
      <h1>ToDo List</h1>
      <Create addTodo={(newTodo) => setTodos([...todos, newTodo])} />
      {todos.length === 0 ? (
        <div>
          <h2>No Record</h2>
        </div>
      ) : (
        todos.map((todo, index) => (
          <div key={index}>
            {todo}
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
