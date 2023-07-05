import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleImportanceOf } from '../reducers/noteReducer';

function Note({ note, handleClick }) {
  return (
    <li>
      <p>
        {note.content}
        {' '}
        {note.important ? 'important' : ''}
      </p>
      <button onClick={handleClick}>toggle importance</button>
    </li>
  );
}
function Notes() {
  const dispatch = useDispatch();
  const notes = useSelector((note) => note);

  return (
    <ul>
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          handleClick={() => dispatch(toggleImportanceOf(note.id))}
        />
      ))}
    </ul>
  );
}

export default Notes;
