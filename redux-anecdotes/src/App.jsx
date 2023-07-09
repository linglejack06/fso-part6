import Notification from './components/Notification';
import Anecdotes from './components/anecdotes';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteFilter from './components/AnecdoteFilter';
import { initializeAnecdotes } from './reducers/anecdotesReducer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeAnecdotes());
  }, [dispatch])
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
