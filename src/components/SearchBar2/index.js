import React from 'react';
import { connect } from 'react-redux';
import { addPostcode } from '../../actions';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './SearchBar2.css';

class SearchBar extends React.Component {
  state = {
    postcode: ''
  }

  updatePostcodeState = (event) => {
    this.setState({
      postcode: event.target.value, 
    });
  };

  render() {
    return (
      <div className="searchBar">
        <input className="searchBarInput" type="text" placeholder="e.g. E14 7DX" 
          onChange={this.updatePostcodeState}></input>
        <button className="searchBarButton" onClick={() => this.props.addPostcode({ postcode: this.state.postcode})} >     
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  postcode: state.postcode,
});

const mapDispatchToProps = {
  addPostcode,
}

const ConnectedSearchBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);

export default ConnectedSearchBar;

