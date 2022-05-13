import { useState } from "react"

const App = () => {
  const [input, setInput] = useState("")
  const [toDolist, setToDoList] = useState([])

  const handleChange = (e) => {
    if(e.target.value.endsWith('\n')) return handleSubmit()
    setInput(e.target.value)
  }

  const handleSubmit = () => {
    if (input === "") return
    setToDoList([...toDolist, input])
    console.log(input)
    setInput("")
  }

  const handleClean = () => {
    setToDoList([])
  }

  return (
    <div className='container'>
      <h1> To do List </h1>
      <textarea
        placeholder="Add an item."
        onChange={handleChange}
        value={input}
      />
      <br />
      <div>
        <button onClick={handleSubmit}>ADD</button>
        <button onClick={handleClean}>CLEAN</button>
      </div>
      <ul>
        {toDolist.map((element, key) => <li key={key}>{element}</li>)}
      </ul>
    </div>
  )
}



export default App