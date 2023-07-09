import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdotesReducer';
import { setMessage, removeMessage } from '../reducers/messageReducer';

function AnecdoteForm () {
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setMessage('Added new anecdote'));
    dispatch(createAnecdote(e.target.content.value));
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