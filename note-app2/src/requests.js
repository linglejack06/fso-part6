import axios from 'axios';

export const getNotes = async () => {
  const response = await axios.get('http://localhost:3000/notes');
  return response.data;
}

export const createNote = async (newNote) => {
  const response = await axios.post('http://localhost:3000/notes', newNote);
  return response.data;
};