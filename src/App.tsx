import { useState, type ChangeEvent } from "react"
import TodoForm from "./components/TodoForm/TodoForm"



interface ITodo{
  id: number
  title: string
  isDone: boolean
}

function App() {
 const [text, setText]= useState<string>('')
 const [todos, setTodos] = useState<Array<ITodo>>([])

const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
setText(e.target.value)
}
const add = () => {
  setTodos((prev) => {
    return [...prev, {id : Date.now(), title: text, isDone: false}]
  })
}
  return (
    <>
      <input value={text} onChange={handleChange}/>
      <button onClick={add}>Add</button>
    </>
  )
}

export default App
