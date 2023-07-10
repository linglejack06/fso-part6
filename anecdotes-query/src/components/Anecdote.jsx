import { useMutation, useQueryClient } from 'react-query';
import { updateAnecdote } from '../requests.js';
import { useNotificationDispatch } from '../notificationContext.jsx';

function Anecdote ({ anecdote }) {
  const queryClient = useQueryClient();
  const notificationDispatch = useNotificationDispatch();
  const updatedAnecdoteMutation = useMutation(updateAnecdote, {
    onSuccess: (updated) => {
      const anecdotes = queryClient.getQueryData('anecdotes');
      const updatedAnecdotes = anecdotes.map((anec) => anec.id === updated.id ? updated : anec);
      queryClient.setQueryData('anecdotes', updatedAnecdotes);
      notificationDispatch({type: 'SET', payload: 'successfully added vote'});
    }
  })
  const handleVote = () => {
    updatedAnecdoteMutation.mutate({
      ...anecdote,
      votes: anecdote.votes + 1,
    })
  }
  return (
    <div className="anecdote-container">
      {anecdote.content}
      <button onClick={handleVote}>Votes {anecdote.votes}</button>
    </div>
  )
}

export default Anecdote;