function Anecdote ({ anecdote }) {
  return (
    <div className="anecdote-container">
      {anecdote.content}
      <button>Votes {anecdote.votes}</button>
    </div>
  )
}

export default Anecdote;