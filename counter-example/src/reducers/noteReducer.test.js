import deepFreeze from 'deep-freeze';
import noteReducer from './noteReducer';

describe('noteReducer', () => {
  it('returns new state with action NEW_NOTE', () => {
    const state = [];
    const action = {
      type: 'notes/createNote',
      payload: 'The app state is in redux store',
    };
    deepFreeze(state);
    const newState = noteReducer(state, action);

    expect(newState).toHaveLength(1);
    expect(newState.map((s) => s.content)).toContainEqual(action.payload);
  });
  it('toggles importance', () => {
    const state = [
      {
        content: 'the app state is in redux store',
        important: true,
        id: 1,
      },
      {
        content: 'state changes are made with actions',
        important: false,
        id: 2,
      },
    ];
    const action = {
      type: 'notes/toggleImportanceOf',
      payload: 2,
    };
    deepFreeze(state);

    const newState = noteReducer(state, action);
    expect(newState).toHaveLength(2);
    expect(newState).toContainEqual(state[0]);
    expect(newState).toContainEqual({
      ...state[1],
      important: true,
    });
  });
});
