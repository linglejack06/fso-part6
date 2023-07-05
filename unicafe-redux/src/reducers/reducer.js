const initialState = {
  good: 0,
  ok: 0,
  bad: 0,
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'GOOD':
      return {
        ...state,
        good: state.good + 1
      };
  }
}

export default reducer