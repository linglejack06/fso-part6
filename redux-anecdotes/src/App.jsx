import Anecdotes from './components/anecdotes';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteFilter from './components/AnecdoteFilter';

function App() {
  return (
    <>
      <AnecdoteForm />
      <AnecdoteFilter />
      <Anecdotes />
    </>
  )
}

export default App
