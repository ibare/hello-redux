import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducer/counterSlice'
import todoReducer from './reducer/todoSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
  },
  devTools: true,
})
