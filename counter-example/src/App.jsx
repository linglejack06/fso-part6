/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import NoteForm from './components/NoteForm';
import VisibilityFilter from './components/VisibilityFilter';
import Notes from './components/Notes';
import noteService from './services/notes';
import { setNotes } from './reducers/noteReducer';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    noteService.getAll().then((notes) => dispatch(setNotes(notes)));
  }, []);
  return (
    <div>
      <NoteForm />
      <VisibilityFilter />
      <Notes />
    </div>
  );
}
export default App;
