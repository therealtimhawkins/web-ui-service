import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './';

configure({ adapter: new Adapter()});

describe('<App />', () => {
  let AppTest;

  beforeEach(() => {
    AppTest = shallow(<App />);
  });

  it('should contain a div of className="App"', () => {
    expect(AppTest.find('div').hasClass('App')).toEqual(true);
  });

  describe('updatePostcodeState()', () => {
    it('shoud set the postcode state to the event value', () => {
      const event = {
        target: {
          value: "Event Value",
        },
      };
  
      expect(AppTest.state().postcode).toEqual("");
      AppTest.instance().updatePostcodeState(event);
      expect(AppTest.state().postcode).toEqual("Event Value");
    });
  });

  describe('showHideHeroSection()', () => {
    it('should invert the status of heroSectionVisible', () => {
      expect(AppTest.state().heroSectionVisible).toEqual(true);
      AppTest.instance().showHideHeroSection();
      expect(AppTest.state().heroSectionVisible).toEqual(false);
    });
  });
});