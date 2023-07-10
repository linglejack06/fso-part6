import { useQueryClient, useMutation } from 'react-query';
import { createAnecdote } from '../requests';

function AnecdoteForm () {
  const queryClient = useQueryClient();
  const newAnecdoteMutation = useMutation(createAnecdote, {
    onSuccess: (newAnec) => {
      const anecdotes = queryClient.getQueryData('anecdotes');
      queryClient.setQueryData('anecdotes', anecdotes.concat(newAnec));
    }
  })
  const handleSubmit = (e) => {
    e.preventDefault;
    const content = e.target.content.value;
    e.target.content.value = '';
    newAnecdoteMutation.mutate(content);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="content" />
      <button type="submit">Add Anecdote</button>
    </form>
  )
}

export default AnecdoteForm