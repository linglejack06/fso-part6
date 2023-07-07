import deepFreeze from 'deep-freeze';
import filterReducer, { initialState, updateFilter } from '../reducers/filterReducer';

describe('Filter Reducer', () => {
  it ('returns initial state when none provided', () => {
    const state = initialState;
    deepFreeze(state);
    const newState = filterReducer(undefined, { type: 'NONE' });
    expect(newState).toEqual(initialState);
  });
  it('updates filter', () => {
    const state = initialState;
    deepFreeze(state);
    const newState = filterReducer(state, updateFilter('The'));
    expect(newState).toEqual('The');
  })
})