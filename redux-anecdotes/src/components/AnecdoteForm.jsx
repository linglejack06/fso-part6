import { useDispatch } from 'react-redux';
import { addAnecdote } from '../reducers/anecdotesReducer';

function AnecdoteForm () {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAnecdote(e.target.content.value));
  }
  return (
    <form onSubmit={handleSubmit}>
      <input name="content" />
      <button type="submit">Add Anecdote</button>
    </form>
  )
}

export default AnecdoteForm;