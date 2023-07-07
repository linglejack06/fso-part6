import { createSlice } from '@reduxjs/toolkit';

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];
const generateId = () => Math.floor(Math.random() * 100001000);
const asObject = (anecdote) => ({
  content: anecdote,
  id: generateId(),
  votes: 0,
});
export const initialState = anecdotes.map((anec) => asObject(anec));
const anecdotesSlice = createSlice({
  name: 'anecdotes',
  initialState,
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
      const content = action.payload;
      return [...state, asObject(content)];
    },
  }
})

export const { incrementVote, addAnecdote }  = anecdotesSlice.actions;
export default anecdotesSlice.reducer;