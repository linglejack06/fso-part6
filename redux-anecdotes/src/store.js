import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './reducers/filterReducer';
import anecdotesReducer from './reducers/anecdotesReducer';
import messageReducer from './reducers/messageReducer';

const store = configureStore({
  reducer: {
    anecdotes: anecdotesReducer,
    filter: filterReducer,
    message: messageReducer,
  },
});

export default store;