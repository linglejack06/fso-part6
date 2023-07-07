const initialState = [
  {
    content: 'reducer defines how redux store works',
    important: true,
    id: 1,
  },
  {
    content: 'state of store can contain any data',
    important: false,
    id: 2,
  },
];
const generateId = () => Math.floor(Math.random() * 10000000000);
export const createNote = (content) => ({
  type: 'NEW_NOTE',
  payload: {
    content,
    important: false,
    id: generateId(),
  },
});
export const toggleImportanceOf = (id) => ({
  type: 'TOGGLE_IMPORTANCE',
  payload: {
    id,
  },
});
const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_NOTE': {
      return [...state, action.payload];
    }
    case 'TOGGLE_IMPORTANCE': {
      const { id } = action.payload;
      const noteToChange = state.find((note) => note.id === id);
      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important,
      };
      return state.map((note) => (note.id !== id ? note : changedNote));
    }
    default:
      return state;
  }
};

export default noteReducer;
