/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import NoteForm from './components/NoteForm';
import VisibilityFilter from './components/VisibilityFilter';
import Notes from './components/Notes';
import { initializeNotes } from './reducers/noteReducer';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeNotes());
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
