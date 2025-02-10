import React from 'react'
import { useLocalStorage } from './useLocalStorage'

const TodoContext = React.createContext()

function TodoProvider({ children }) {
  //>>> Definicion de Estados
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  //>>> Estados derivados <<<<<<

  // Estado derivado para contador de tareas
  const completedTodos = todos.filter(
      todo => !!todo.completed
    ).length;
  const totalTodos = todos.length;

  // Estado derivado para filtrado de busqueda
  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    } 
  )

  // Estado dervidado: marcado de tareas realizadas
  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos[todoIndex].completed = true
    saveTodos(newTodos)
  }

  // Estado derivado: marcado de eliminacion de tareas
  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }   


	return (
		<TodoContext.Provider value={{
	      loading,
	      error,
	      completedTodos,
	      totalTodos,
	      searchValue,
	      setSearchValue,
	      searchedTodos,
	      completeTodo,
	      deleteTodo			
		}}>
			{children}
		</TodoContext.Provider>
	)
}

export { TodoContext, TodoProvider }