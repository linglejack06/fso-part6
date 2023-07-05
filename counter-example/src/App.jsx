/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createNote, toggleImportanceOf } from './reducers/noteReducer';

function App() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state);

  const addNote = (e) => {
    e.preventDefault();
    const content = e.target.note.value;
    e.target.note.value = '';
    dispatch(createNote(content));
  };
  const toggleImportance = (id) => {
    dispatch(toggleImportanceOf(id));
  };
  return (
    <>
      <form onSubmit={addNote}>
        <input name="note" />
        <button type="submit">Add</button>
      </form>
      <div>
        {notes.map((note) => (
          <li key={note.id} onClick={() => toggleImportance(note.id)}>
            {note.content}
            <strong>{note.important ? 'important' : ''}</strong>
          </li>
        ))}
      </div>
    </>
  );
}
export default App;
