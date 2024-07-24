import { useSelector } from 'react-redux'

export default function Header() {
  const count = useSelector((state) => state.counter.value)

  return (
    <header>
      <h1>My Website</h1>
      <h2>Count: {count}</h2>
    </header>
  )
}
