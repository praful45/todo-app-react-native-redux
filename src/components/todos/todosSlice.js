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
      prepare({title, image = null}) {
        return {
          payload: {
            id: nanoid(),
            title,
            checked: false,
            image,
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
          existingTodo.image = action.payload.image;
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
    deleteAllTodos: {
      reducer(state, action) {
        state.todos = [];
      },
    },
  },
});

export const getTodos = state => state.todos.todos;

export const {
  addTodos,
  deleteTodos,
  toggleChecked,
  editTodos,
  changeMode,
  deleteAllTodos,
} = todosSlice.actions;
export default todosSlice.reducer;
