import React from 'react'

// Custom Hook: useLocalStorage
function useLocalStorage(itemName, initialValue) {
  // Trabajando en logica para el localStorage
  const localStorageItem = localStorage.getItem(itemName)

  let parsedItem

  if(!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem)
  }

  const [item, setItem] = React.useState(parsedItem)

  // Guardar tareas en el state y localStorage
  const saveItem =  (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return [item, saveItem]
}

export { useLocalStorage }
