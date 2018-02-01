import React from 'react';

import FruitBasket from './FruitBasket';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    };

    this.handleFilterChange = this.handleFilterChange.bind(this)
  }

componentDidMount() {
  fetch('/api/fruit')
    .then(response => response.json())
    .then(fruit => this.setState({ fruit }));
  this.fetchFilters()
}

fetchFilters = () => {
  fetch('/api/fruit_types')
    .then(response => response.json())
    .then(filters => this.setState({ filters }));
}

handleFilterChange = (event) => {
  console.log('new filter: ', event.target.value);
  this.setState({ currentFilter: event.target.value });
}

render(){
    return  <FruitBasket
         items={this.state.fruit}
         handleFilterChange={this.handleFilterChange}
         filters={this.state.filters}
         currentFilter={this.state.currentFilter}
        />;
    }
}

export default App;
