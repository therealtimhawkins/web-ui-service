import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import moxios from 'moxios';
import App from './';

configure({ adapter: new Adapter()});

describe('<App />', () => {
  let AppTest;

  beforeEach(() => {
    AppTest = shallow(<App />);
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should contain a div of className="App"', () => {
    expect(AppTest.find('div').hasClass('App')).toEqual(true);
  });

  it('should contain a Header, HeroSection and SearchBar', () => {
    expect(AppTest.find('Header').exists()).toEqual(true);
    expect(AppTest.find('HeroSection').exists()).toEqual(true);
    expect(AppTest.find('SearchBar').exists()).toEqual(true);
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

  describe('searchButtonClicked()', () => {
    it('should call getRestaurantData()', () => {
      const spy = jest.spyOn(AppTest.instance(), 'getRestaurantData');
      AppTest.update();
      expect(spy).toHaveBeenCalledTimes(0);
      AppTest.instance().searchButtonClicked();
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should call fetchDataFromRestaurantService()', () => {
      const spy = jest.spyOn(AppTest.instance(), 'fetchDataFromRestaurantService');
      AppTest.update();
      expect(spy).toHaveBeenCalledTimes(0);
      AppTest.instance().searchButtonClicked();
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('getRestaurantData()', () => {
    it('should set the data state to the result from fetchDataFromRestaurantService()', async () => {
      const result = {
        data: 'Test Data'
      };
      AppTest.instance().fetchDataFromRestaurantService = jest.fn(async () => result)
      await AppTest.instance().getRestaurantData();
      expect(AppTest.state().restaurantData).toEqual('Test Data');
    });
  });

  describe('fetchDataFromRestaurantService', () => {
    it('should return the result of a successful api call', async () => {
      moxios.stubRequest('http://testingurl.com/api/api/restaurants/', {
        status: 200,
        responseText: 'Test Data'
      });

      const result = await AppTest.instance().fetchDataFromRestaurantService();
      expect(result.data).toEqual('Test Data');
    });

    it('should log an error on an unsuccessful api call', async () => {
      moxios.stubRequest('http://testingurl.com/api/api/restaurants/', {
        status: 500,
        responseText: 'Error'
      });

      const result = await AppTest.instance().fetchDataFromRestaurantService();
      expect(result).toEqual(false);
    });
  });

  describe('<SearchBar /> props()', () => {
    it('should be passed updatePostcodeState(e) as the onChange prop', () => {
    });
  });
});