import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getAnecdotes, createAnecdote } from './requests.js';
import AnecdoteForm from './components/AnecdoteForm';
import Anecdote from './components/Anecdote';

function App() {
  const queryClient = useQueryClient();
  const newAnecdoteMutation = useMutation(createAnecdote, {
    onSuccess: (newAnec) => {
      const anecdotes = queryClient.getQueryData('anecdotes');
      queryClient.setQueryData('anecdotes', anecdotes.concat(newAnec));
    }
  })
  const result = useQuery('anecdotes', getAnecdotes);
  if(result.isLoading) {
    return (
      <div className="loading">
        Loading...
      </div>
    )
  } if (result.isError) {
    return (
      <div className="error">
        Server not responding...
      </div>
    )
  }
  const anecdotes = result.data;
  return (
    <>
      <AnecdoteForm />
      {anecdotes.map((anecdote) => (
        <Anecdote key={anecdote.id} anecdote={anecdote}/>
      ))}
    </>
  )
}

export default App
