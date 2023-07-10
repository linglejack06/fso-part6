import { useQuery } from 'react-query';
import { getAnecdotes } from './requests.js';
import AnecdoteForm from './components/AnecdoteForm';
import Notification from './components/Notification.jsx';
import Anecdote from './components/Anecdote';

function App() {
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
      <Notification />
      {anecdotes.map((anecdote) => (
        <Anecdote key={anecdote.id} anecdote={anecdote}  />
      ))}
    </>
  )
}

export default App
