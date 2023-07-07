import { createSlice } from '@reduxjs/toolkit';

const initialState = 'test message';

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {

  }
});

export default messageSlice.reducer;