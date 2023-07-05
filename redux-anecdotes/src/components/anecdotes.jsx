import { useDispatch, useSelector } from 'react-redux';
import { incrementVote } from '../reducers/anecdotesReducer';

function Anecdote ({ anecdote, handleClick }) {
  return (
    <div className='anecdote-container'>
      <p>{anecdote.content}</p>
      <button type="button" onClick={handleClick}>
        {`${anecdote.votes} Votes`}
      </button>
    </div>
  )
}
function Anecdotes () {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => state.sort((a, b) => b.votes - a.votes));
  const handleVote = (id) => dispatch(incrementVote(id));
  return (
    <ul>
      {anecdotes.map((anecdote) => (
        <Anecdote key={anecdote.id} anecdote={anecdote} handleClick={() => handleVote(anecdote.id)} />
      ))}
    </ul>
  );
}

export default Anecdotes;