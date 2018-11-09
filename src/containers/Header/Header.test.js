import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './';

configure({ adapter: new Adapter()});

describe('<Header />', () => {
  let HeaderTest;

  beforeEach(() => {
    HeaderTest = shallow(<Header />);
  });

  it('', () => {
  });
});