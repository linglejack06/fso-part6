import { useQueryClient, useMutation } from 'react-query';
import { createAnecdote } from '../requests';
import { useNotificationDispatch } from '../notificationContext';

function AnecdoteForm () {
  const queryClient = useQueryClient();
  const notificationDispatch = useNotificationDispatch();
  const newAnecdoteMutation = useMutation(createAnecdote, {
    onSuccess: (newAnec) => {
      const anecdotes = queryClient.getQueryData('anecdotes');
      queryClient.setQueryData('anecdotes', anecdotes.concat(newAnec));
    }
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    const content = e.target.content.value;
    e.target.content.value = '';
    if(content.length < 5) {
      notificationDispatch({ type: 'SET', payload: 'Anecdote must be atleast five characters'});
      return null;
    }
    newAnecdoteMutation.mutate(content);
    notificationDispatch({ type: 'SET', payload: 'successfully added anecdote'});
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="content" />
      <button type="submit">Add Anecdote</button>
    </form>
  )
}

export default AnecdoteForm