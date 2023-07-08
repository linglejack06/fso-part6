import { createSlice } from '@reduxjs/toolkit';

const anecdotesSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    incrementVote(state, action) {
      const id = action.payload;
      const editedAnec = state.find((anec) => anec.id === id);
      const newAnec = {
        ...editedAnec,
        votes: editedAnec.votes + 1,
      };
      return state.map((anec) => anec.id === id ? newAnec : anec);
    },
    addAnecdote(state, action) {
      return [...state, action.payload];
    },
    setAnecdotes(state, action) {
      return action.payload;
    }
  }
})

export const { incrementVote, addAnecdote, setAnecdotes }  = anecdotesSlice.actions;
export default anecdotesSlice.reducer;