import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = [];

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodos: {
      reducer(state, action) {
        state.unshift(action.payload);
      },
      prepare(title) {
        return {
          payload: {
            id: nanoid(),
            title,
            checked: false,
          },
        };
      },
    },
    toggleChecked: {
      reducer(state, action) {
        const existingTodo = state.find(todo => todo.id === action.payload);
        if (existingTodo) {
          existingTodo.checked = !existingTodo.checked;
        }
      },
    },
    deleteTodos: {
      reducer(state, action) {
        return state.filter(item => item.id !== action.payload);
      },
    },
  },
});

export const getTodos = state => state.todos;

export const {addTodos, deleteTodos, toggleChecked} = todosSlice.actions;
export default todosSlice.reducer;
