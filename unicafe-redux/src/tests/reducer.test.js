import deepFreeze from 'deep-freeze';
import reducer from '../reducers/reducer';

describe('unicafe reducer', () => {
  const initialState = {
    good: 0,
    ok: 0,
    bad: 0,
  };
  it ('returns initial state when called with no state', () => {
    const state = reducer(undefined, { type: 'NONE' });
    expect(state).toEqual(initialState);
  })
})