import Notification from './components/Notification';
import Anecdotes from './components/anecdotes';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteFilter from './components/AnecdoteFilter';

function App() {
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
