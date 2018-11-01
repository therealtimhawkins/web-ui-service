import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoginButton from './';

configure({ adapter: new Adapter()});

describe('<LoginButton />', () => {
  let LoginButtonTest;

  beforeEach(() => {
    LoginButtonTest = shallow(<LoginButton />);
  });

  it('should contain a button of className="loginButton"', () => {
    expect(LoginButtonTest.find('button').hasClass('loginButton')).toEqual(true);
  });
});