import React, { Component } from 'react';
import Filter from '../Filter';
import List from '../List';
import filtersList from './filter';
import data from './list';
import {connect} from 'react-redux';
import {getFilters, getData} from '../../actions';
import './styles.scss';

class App extends Component {
  componentWillMount(){
    const {getFilters, getData} = this.props;
    getFilters(filtersList);
    getData(data);
  }

  render() {
    return (
      <div className="app">
        <header className="app__header">Sample</header>
        <div className="app__filter">
          <Filter />
          <List />
        </div>
      </div>
    );
  }
}

export default connect(null, {getFilters, getData})(App);
