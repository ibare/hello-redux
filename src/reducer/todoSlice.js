import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    items: [],
    all: 0,
    done: 0,
    doing: 0,
  },
  reducers: {
    add: (state, { payload }) => {
      state.items.push({
        id: state.all + 1,
        text: payload,
        done: false,
      })
      state.all += 1
      state.doing += 1
    },
    done: (state, { payload }) => {
      const item = state.items.find((item) => item.id === payload)
      item.done = true
      state.done += 1
      state.doing -= 1
    },
    doing: (state, { payload }) => {
      const item = state.items.find((item) => item.id === payload)
      item.done = false
      state.done -= 1
      state.doing += 1
    },
    remove: (state, { payload }) => {
      const index = state.items.findIndex((item) => item.id === payload)

      if (state.items[index].done) {
        state.done -= 1
      } else {
        state.doing -= 1      
      }

      state.items.splice(index, 1)
      state.all -= 1
    },
  }
})

export const { add, done, doing, remove } = todoSlice.actions

export default todoSlice.reducer
