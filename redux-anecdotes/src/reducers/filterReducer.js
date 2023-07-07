export const initialState = '';
export const updateFilter = (value) => ({
  type: 'UPDATE_FILTER',
  payload: value,
});

const filterReducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default filterReducer