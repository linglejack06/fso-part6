import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getNotes, createNote, updateNote } from './requests';

function App() {
  const queryClient = useQueryClient();
  const newNoteMutation = useMutation(createNote, {
    onSuccess: (newNote) => {
      const notes = queryClient.getQueryData('notes');
      queryClient.setQueryData('notes', notes.concat(newNote));
    }
  });
  const updatedNoteMutation = useMutation(updateNote, {
    onSuccess: (updatedNote) => {
      const notes = queryClient.getQueryData('notes');
      const updatedNotes = notes.map((note) => note.id === updatedNote.id ? updatedNote : note);
      queryClient.setQueryData('notes', updatedNotes);
    }
  })
  const addNote = async (e) => {
    e.preventDefault();
    const content = e.target.note.value;
    e.target.note.value = '';
    newNoteMutation.mutate({ content, important: true });
  };
  const toggleImportance = async (note) => {
    updatedNoteMutation.mutate({...note, important: !note.important});
  };
  const result = useQuery(
    'notes',
    getNotes,
  )
  if(result.isLoading) {
    return <div>Loading data...</div>
  }
  console.log(result);
  const notes = result.data;
  return (
    <>
    <h2>Notes App Rewrite</h2>
    <form onSubmit={addNote}>
      <input name="note" />
      <button type="submit">Add</button>
    </form>
    {notes.map((note) => (
      <li key={note.id}>
        {note.content}
        <strong> {note.important ? 'important' : ''}</strong>
        <button onClick={() => toggleImportance(note)}>Change Importance</button>
      </li>
    ))}
    </>
  )
}

export default App
