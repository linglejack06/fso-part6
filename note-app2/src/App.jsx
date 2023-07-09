import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getNotes, createNote } from './requests';

function App() {
  const queryClient = useQueryClient();
  const newNoteMutation = useMutation(createNote, {
    onSuccess: () => {
      queryClient.invalidateQueries('notes');
    }
  });
  const addNote = async (e) => {
    e.preventDefault();
    const content = e.target.note.value;
    e.target.note.value = '';
    newNoteMutation.mutate({ content, important: true });
  };
  const toggleImportance = (note) => {
    console.log('toggle importance of', note.id);
  };
  const result = useQuery(
    'notes',
    getNotes,
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
