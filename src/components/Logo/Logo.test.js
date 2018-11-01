import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Logo from './';

configure({ adapter: new Adapter()});

describe('<Logo />', () => {
  let LogoTest;

  beforeEach(() => {
    LogoTest = shallow(<Logo />);
  });

  it('should contain an <img /> with the carrot logo as src', () => {
    expect(LogoTest.find('img').first().props().src).toEqual('images/logo/logoCarrotOrange.svg');
  });

  it('should contain an <img /> with the vegitable logo as src', () => {
    expect(LogoTest.find('img').at(1).props().src).toEqual('images/logo/logoVegitableOrange.svg');
  });
});