import './TodoSearch.css'

function TodoSearch() {
  return (
    <input 
      placeholder="Cortar cebolla"
      className="TodoSearch"
      onChange={(event) => {
        console.log('Escribiste en el TodoSearch')
        console.log(event)
        console.log(event.target.value)
      }}
      ></input>
  )
}

export { TodoSearch };