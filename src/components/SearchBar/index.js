import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => (
  <div className="searchBar">
    <input className="searchBarInput" type="text" placeholder="e.g. E14 7DX" 
      onChange={props.onChange}
      onFocus={props.onChange}></input>
    <button className="searchBarButton" onClick={props.onClick} >Find</button>
  </div>
);

export default SearchBar;
