import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  mode: 'ADD',
  editId: null,
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodos: {
      reducer(state, action) {
        state.todos.unshift(action.payload);
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
        const existingTodo = state.todos.find(
          todo => todo.id === action.payload,
        );
        if (existingTodo) {
          existingTodo.checked = !existingTodo.checked;
        }
      },
    },
    editTodos: {
      reducer(state, action) {
        const existingTodo = state.todos.find(
          todo => todo.id === action.payload.editId,
        );
        if (existingTodo) {
          existingTodo.title = action.payload.title;
        }
      },
    },
    deleteTodos: {
      reducer(state, action) {
        const aftertodos = state.todos.filter(
          item => item.id !== action.payload,
        );
        state.todos = [...aftertodos];
      },
    },
    changeMode: {
      reducer(state, action) {
        state.mode = action.payload.mode;
        state.editId = action.payload.id;
      },
    },
  },
});

export const getTodos = state => state.todos.todos;

export const {addTodos, deleteTodos, toggleChecked, editTodos, changeMode} =
  todosSlice.actions;
export default todosSlice.reducer;
