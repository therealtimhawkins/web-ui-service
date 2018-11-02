import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchBar from './';

configure({ adapter: new Adapter()});

describe('<Header />', () => {
  let SearchBarTest;

  beforeEach(() => {
    SearchBarTest = shallow(<SearchBar />);
  });

  it('should render a search bar with className="searchBar', () => {
    expect(SearchBarTest.find('div').first().hasClass('searchBar')).toEqual(true);
  });
});