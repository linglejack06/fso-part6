import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import anecdotesReducer from './reducers/anecdotesReducer';
import filterReducer from './reducers/filterReducer.js';

const reducer = combineReducers({
  anecdotes: anecdotesReducer,
  filter: filterReducer,
})

const store = createStore(reducer);


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
  
)
