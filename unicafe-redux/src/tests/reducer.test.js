import deepFreeze from 'deep-freeze';
import reducer from '../reducers/reducer';

describe('unicafe reducer', () => {
  const initialState = {
    good: 0,
    ok: 0,
    bad: 0,
  };
  it ('returns initial state when called with no state', () => {
    const state = {};
    deepFreeze(state);
    const newState = reducer(undefined, { type: 'NONE' });
    expect(newState).toEqual(initialState);
  })
  it ('increments good correctly', () => {
    const state = initialState;
    deepFreeze(state);
    const newState = reducer(initialState, { type: 'GOOD' });
    expect(newState).toEqual({
      ...state,
      good: 1,
    })
  })
  it ('increments bad correctly', () => {
    const state = initialState;
    deepFreeze(state);
    const newState = reducer(state, { type: 'BAD' });
    expect(newState).toEqual({
      ...state,
      bad: 1,
    })
  })
  it ('increments ok correctly', () => {
    const state = initialState;
    deepFreeze(state);
    const newState = reducer(state, { type: 'OK' });
    expect(newState).toEqual({
      ...state,
      ok: 1,
    })
  })
  it ('zeroes correctly', () => {
    const state = {
      good: 5,
      bad: 4,
      ok: 9,
    };
    deepFreeze(state);
    const newState = reducer(state, { type: 'ZERO' });
    expect(newState).toEqual(initialState);
  })
})