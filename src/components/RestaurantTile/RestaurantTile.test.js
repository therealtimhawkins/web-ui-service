import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RestaurantTile from './';

configure({ adapter: new Adapter()});

describe('<RestaurantTile />', () => {
  let RestaurantTileTest;

  beforeEach(() => {
    RestaurantTileTest = shallow(<RestaurantTile restaurantData={true} />);
  });

  it('should render a <div /> with className="restaurant"', () => {
    expect(RestaurantTileTest.find('div').first().hasClass('restaurant')).toEqual(true);
  });
});