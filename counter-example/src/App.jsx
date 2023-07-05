/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import NoteForm from './components/NoteForm';
import Notes from './components/Notes';

function App() {
  return (
    <div>
      <NoteForm />
      <Notes />
    </div>
  );
}
export default App;
