import React from 'react';
import PropTypes from 'prop-types';

const FilteredFruitList = ({items, currentFilter}) => {

  const list = !currentFilter || currentFilter === 'all' ? items : items.filter(i =>
    i.fruit_type === currentFilter);
  return <ul className="fruit-list"> {list.map((item, index) => <li key={index}>{item.char}</li>)}</ul>}

FilteredFruitList.defaultProps={
  items: [],
  currentFilter: null
}

export default FilteredFruitList;
