import Notification from './components/Notification';
import Anecdotes from './components/anecdotes';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteFilter from './components/AnecdoteFilter';
import { setAnecdotes } from './reducers/anecdotesReducer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import anecdotesService from './services/anecdotes';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    anecdotesService.getAnecdotes().then((anecdotes) => dispatch(setAnecdotes(anecdotes)))
  })
  return (
    <>
      <Notification />
      <AnecdoteForm />
      <AnecdoteFilter />
      <Anecdotes />
    </>
  )
}

export default App
