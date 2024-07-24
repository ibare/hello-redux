import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../reducer/todoSlice'
import TodoList from './TodoList'

export default function Todo() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const onAdd = () => {
    dispatch(add(text))
    setText('')
  }

  return (
    <div>
      <h1>Todo</h1>
      <div>
        <input type="text" value={text} onChange={event => setText(event.target.value)} />
        <button onClick={onAdd}>추가</button>
      </div>
      <TodoList />
    </div>
  )
}

