function AnecdoteForm () {
  const handleSubmit = (e) => {
    e.preventDefault;
    const content = e.target.content.value;
    e.target.content.value = '';
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="anecdote" />
      <button type="submit">Add Anecdote</button>
    </form>
  )
}

export default AnecdoteForm;