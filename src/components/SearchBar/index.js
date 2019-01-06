import React from 'react';
import LoginButton from '../LoginButton';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './SearchBar.css';

const SearchBar = (props) => (
  <div className="searchBar">
    <input className="searchBarInput" type="text" placeholder="e.g. E14 7DX" 
      onChange={props.onChange}
      onFocus={props.onChange}></input>
    <button className="searchBarButton" onClick={props.onClick} >     
      <FontAwesomeIcon icon={faSearch} />
    </button>
    <LoginButton />
  </div>
);

export default SearchBar;
