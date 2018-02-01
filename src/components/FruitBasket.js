import React from 'react';
import PropTypes from 'prop-types';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';


const FruitBasket = (props) => {return (
  <div className="fruit-basket">
    <Filter handleChange={props.handleFilterChange} filters={props.filters}/>
    <FilteredFruitList items={props.items} currentFilter={props.currentFilter}/>
  </div>
);}


FruitBasket.defaultProps = {
  handleFilterChange: function() {},
  filters: [],
  items: [],
  currentFilter: null
}

export default FruitBasket;
