/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

const initialState = 'test message';

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setMessage (state, action) {
      const message = action.payload;
      return message;
    },
    removeMessage (state, action) {
      return initialState;
    },
  }
});

export const { setMessage, removeMessage } = messageSlice.actions;
export const showMessage = (message, time) => async (dispatch) => {
  dispatch(setMessage(message));
  const timeout = parseInt(`${time}000`, 10);
  setTimeout(() => {
    dispatch(removeMessage());
  }, timeout);
}
export default messageSlice.reducer;