import React from 'react';
import { TodoCounter } from './TodoCounter.js';
import { TodoSearch } from './TodoSearch.js'
import { TodoList } from './TodoList.js'
import { TodoItem } from './TodoItem.js'
import { CreateTodoButton } from './CreateTodoButton.js'

/*const defaultTodos = [
  { text: 'Cortar cebolla', completed: true},
  { text: 'Tomar el Curso de Intro a React.js', completed: false},
  { text: 'Llorar con la llorona', completed: false},
  { text: 'LALALALALLALA', completed: false},
  { text: 'Usar estados derivados', completed: true}
];

localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos)
localStorage.removeItem('TODOS_V1')*/


// Custom Hook: useLocalStorage
function useLocalStorage(itemName, initialValue) {
  // Trabajando en logica para el localStorage
  const localStorageItem = localStorage.getItem(itemName)

  let parsedItem

  if(!localStorageItem){
    localStorage.setItem('TODOS_V1', JSON.stringify([initialValue]));
    parsedItem = [initialValue];
  } else {
    parsedItem = JSON.parse(localStorageItem)
  }

  const [item, setItem] = React.useState(parsedItem)

  // Guardar tareas en el state y localStorage
  const saveItem =  (newItem) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newItem))
    setItem(newItem)
  }

  return [item, saveItem]
}

function App() {  
  //>>> Definicion de Estados
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
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
      (todo) => todo.text == text
    )
    newTodos[todoIndex].completed = true
    saveTodos(newTodos)
  }

  // Estado derivado: marcado de eliminacion de tareas
  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    )
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }   

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

export default App;
