import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../reducers/filterReducer';

function AnecdoteFilter () {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  const handleChange = (e) => {
    dispatch(updateFilter(e.target.value))
  };
  return (
    <div>
      <h2>Search Keywords...</h2>
      <form>
        <input name="filter" value={filter} onChange={handleChange}/>
      </form>
    </div>
  )
}

export default AnecdoteFilter;