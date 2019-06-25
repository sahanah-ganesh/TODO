import React from 'react';
import FilterLink from '../Containers/FilterLink.js';
import { VisibilityFilters } from '../Modules/action.js';

const Filter = () => (
  <div className='filter-buttons'>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Pending
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Done
    </FilterLink>
  </div>
)

export default Filter;