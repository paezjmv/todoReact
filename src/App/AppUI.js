import React from 'react'
import { TodoCounter } from '../TodoCounter/';
import { TodoSearch } from '../TodoSearch/'
import { TodoList } from '../TodoList/'
import { TodoItem } from '../TodoItem/'
import { CreateTodoButton } from '../CreateTodoButton/'

function AppUI ({
      loading,
      error,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo
}) {
   //>>> Estructura Html
  return (
    <React.Fragment>

      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {loading && <p>Estamos Cargando...</p>}
        {error && <p>Desesperate, hubo un error!!...</p>}
        {(!loading && searchedTodos.length == 0) && <p>Crea tu primer TODO!</p>}

        {searchedTodos.map(todo => (
          <TodoItem 
            Key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI }