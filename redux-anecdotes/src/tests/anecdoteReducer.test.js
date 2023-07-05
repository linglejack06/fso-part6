import deepFreeze from 'deep-freeze';
import anecdotesReducer, { initialState, incrementVote, addAnecdote } from '../reducers/anecdotesReducer';

describe('Anecdotes reducer', () => {
  it ('returns initial state when no state is provided', () => {
    const state = initialState;
    deepFreeze(state);
    const newState = anecdotesReducer(undefined, { type: 'BLANK' });
    expect(newState).toEqual(initialState);
  })
  it ('increments vote correctly', () => {
    const state = initialState;
    deepFreeze(state);
    const newState = anecdotesReducer(state, incrementVote(initialState[0].id));
    expect(newState).toContainEqual({
      ...initialState[0],
      votes: 1,
    })
  })
})