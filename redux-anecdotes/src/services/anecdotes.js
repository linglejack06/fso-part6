import axios from 'axios';

const BASE_URL = 'http://localhost:3000/anecdotes';
const getAnecdotes = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
}
const createAnecdote = async (content) => {
  const response = await axios.post(BASE_URL, {
    content,
    votes: 0,
  });
  return response.data;
};
const incrementVote = async (id) => {
  const { data } = await axios.get(BASE_URL);
  const anecdote = data.find((anec) => anec.id === id);
  const response = await axios.put(`${BASE_URL}/${anecdote.id}`, {
    ...anecdote,
    votes: anecdote.votes + 1,
  });
  return response.data;
}

export default { getAnecdotes, createAnecdote, incrementVote };