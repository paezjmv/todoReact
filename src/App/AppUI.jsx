import React from 'react'
import { TodoCounter } from '../TodoCounter/';
import { TodoSearch } from '../TodoSearch/'
import { TodoList } from '../TodoList/'
import { TodoItem } from '../TodoItem/'
import { TodosLoading } from '../TodosLoading/'
import { TodosError } from '../TodosError/'
import { EmptyTodos } from  '../EmptyTodos/'
import { CreateTodoButton } from '../CreateTodoButton/'
import { TodoForm } from '../TodoForm'
import { Modal } from '../Modal/'
import { TodoContext } from '../TodoContext/'

function AppUI () {
   //>>> Estructura Html
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext)

  return (
    <React.Fragment>

      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {error && <TodosError />}
        {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

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

      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </React.Fragment>
  );
}

export { AppUI }