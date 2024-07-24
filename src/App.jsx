import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './reducer/counterSlice'
import Header from './Header'
import Footer from './Footer'
import Todo from './todo/Todo'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <Header />
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>증가</button>
      <button onClick={() => dispatch(decrement())}>감소</button>
      <Todo />
      <Footer />
    </div>
  )
}

export default App
