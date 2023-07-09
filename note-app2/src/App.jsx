import { useQuery } from 'react-query';
import axios from 'axios';

function App() {
  const addNote = async (e) => {
    e.preventDefault();
    const content = e.target.note.value;
    e.target.note.value = '';
    console.log(content);
  };
  const toggleImportance = (note) => {
    console.log('toggle importance of', note.id);
  };
  const result = useQuery(
    'notes',
    () => axios.get('http://localhost:3000/notes').then((res) => res.data),
  )
  console.log(result);
  if(result.isLoading) {
    return <div>Loading data...</div>
  }
  const notes = result.data;
  return (
    <>
    <h2>Notes App Rewrite</h2>
    <form onSubmit={addNote}>
      <input name="note" />
      <button type="submit">Add</button>
    </form>
    {notes.map((note) => (
      <li key={note.id} onClick={() => toggleImportance(note)}>
        {note.content}
        <strong> {note.important ? 'important' : ''}</strong>
      </li>
    ))}
    </>
  )
}

export default App
