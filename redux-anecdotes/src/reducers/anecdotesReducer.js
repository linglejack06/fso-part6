import { createSlice } from '@reduxjs/toolkit';
import anecdoteService from '../services/anecdotes';

const anecdotesSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    updateAnecdotes(state, action) {
      const editedAnecdote = action.payload;
      return state.map((anec) => anec.id === editedAnecdote.id ? editedAnecdote : anec);
    },
    addAnecdote(state, action) {
      return [...state, action.payload];
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
  }
})

export const { updateAnecdotes, addAnecdote, setAnecdotes }  = anecdotesSlice.actions;
export const createAnecdote = (content) => async (dispatch) => {
  const anecdote = await anecdoteService.createAnecdote(content);
  dispatch(addAnecdote(anecdote));
};
export const initializeAnecdotes = () => async (dispatch) => {
  const anecdotes = await anecdoteService.getAnecdotes();
  dispatch(setAnecdotes(anecdotes));
}
export const addVote = (id) => async (dispatch) => {
  const updatedAnecdote = await anecdoteService.incrementVote(id);
  dispatch(updateAnecdotes(updatedAnecdote))
}
export default anecdotesSlice.reducer;