import axios from 'axios';

export const getAnecdotes = async () => {
  const response = await axios.get('http://localhost:3000/anecdotes');
  return response.data;
};
export const 