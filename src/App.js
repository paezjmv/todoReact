import React from 'react';
import { TodoCounter } from './TodoCounter.js';
import { TodoSearch } from './TodoSearch.js'
import { TodoList } from './TodoList.js'
import { TodoItem } from './TodoItem.js'
import { CreateTodoButton } from './CreateTodoButton.js'

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true},
  { text: 'Tomar el Curso de Intro a React.js', completed: false},
  { text: 'Llorar con la llorona', completed: false},
  { text: 'LALALALALLALA', completed: false},
  { text: 'Usar estados derivados', completed: true}
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(
      todo => !!todo.completed
    ).length;
  const totalTodos = todos.length;

  console.log('Los usuarios buscan todos de ' + searchValue)

  return (
    <React.Fragment>

      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos}/>
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
            Key={todo.text} 
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
