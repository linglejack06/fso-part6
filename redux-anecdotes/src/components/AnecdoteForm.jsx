import { useDispatch } from 'react-redux';
import { addAnecdote } from '../reducers/anecdotesReducer';
import { setMessage, removeMessage } from '../reducers/messageReducer';
import anecdotesService from '../services/anecdotes';

function AnecdoteForm () {
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setMessage('Added new anecdote'));
    const anecdote = await anecdotesService.createAnecdote(e.target.content.value);
    dispatch(addAnecdote(anecdote));
    setTimeout(() => {
      dispatch(removeMessage());
    }, 5000)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input name="content" />
      <button type="submit">Add Anecdote</button>
    </form>
  )
}

export default AnecdoteForm;