import { useDispatch } from 'react-redux';
import React from 'react';
import { filterChange } from '../reducers/filterReducer';

function VisibilityFilter() {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="container">
        <p>all</p>
        <input type="radio" name="filter" onChange={() => dispatch(filterChange('ALL'))} />
      </div>
      <div className="container">
        <p>Important</p>
        <input type="radio" name="filter" onChange={() => dispatch(filterChange('IMPORTANT'))} />
      </div>
      <div className="container">
        <p>Not Important</p>
        <input type="radio" name="filter" onChange={() => dispatch(filterChange('NONIMPORTANT'))} />
      </div>
    </div>
  );
}

export default VisibilityFilter;
