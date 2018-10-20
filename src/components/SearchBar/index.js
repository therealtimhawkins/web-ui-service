import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => (
  <div className="searchBar">
    <input className="searchBarInput" onChange={props.onChange}></input>
    <button className="searchBarButton" onClick={props.onClick} >Find</button>
  </div>
);

export default SearchBar;
