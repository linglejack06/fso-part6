import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdotesReducer';
import { showMessage } from '../reducers/messageReducer';

function AnecdoteForm () {
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(showMessage('Added new anecdote', 5));
    dispatch(createAnecdote(e.target.content.value));
  }
  return (
    <form onSubmit={handleSubmit}>
      <input name="content" />
      <button type="submit">Add Anecdote</button>
    </form>
  )
}

export default AnecdoteForm;