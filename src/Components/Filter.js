import React from 'react';
import FilterLink from '../Containers/FilterLink.js';
import { VisibilityFilters } from '../Modules/action.js';

const Filter = () => (
  <div>
    <span>Sort By: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Active
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </div>
)

export default Filter;