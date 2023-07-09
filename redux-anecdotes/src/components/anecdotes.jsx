import { useDispatch, useSelector } from 'react-redux';
import { addVote } from '../reducers/anecdotesReducer';
import { showMessage } from '../reducers/messageReducer';

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
  const anecdotes = useSelector((state) => {
    const filteredAnecdotes = state.anecdotes.filter((anecdote) => anecdote.content.toLowerCase().includes(state.filter.toLowerCase()));
    return filteredAnecdotes.sort((a, b) => b.votes - a.votes);
  });
  const handleVote = (id) => {
    const editAnec = anecdotes.find((anec) => anec.id === id);
    dispatch(showMessage(`Added vote to ${editAnec.content}`, 5));
    dispatch(addVote(id));
  };
  return (
    <ul>
      {anecdotes.map((anecdote) => (
        <Anecdote key={anecdote.id} anecdote={anecdote} handleClick={() => handleVote(anecdote.id)} />
      ))}
    </ul>
  );
}

export default Anecdotes;