import { useSelector } from 'react-redux'
import { add } from '../reducer/todoSlice'

export default function TodoList() {
  const todos = useSelector((state) => state.todo.todos)

  return (
    <div>
      <h1>TodoList</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  )
}
