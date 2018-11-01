import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HeroSection from './';

configure({ adapter: new Adapter()});

describe('<HeroSection />', () => {
  let HeroSectionTest;

  beforeEach(() => {
    HeroSectionTest = shallow(<HeroSection />);
  });

  it('should contain a single <div />', () => {
    expect(HeroSectionTest.find('div').exists()).toEqual(true);
  });
});