export const initialState = '';
export const updateFilter = (value) => ({
  type: 'UPDATE_FILTER',
  payload: value,
});

const filterReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATE_FILTER':
      return action.payload;
    default:
      return state;
  }
};

export default filterReducer