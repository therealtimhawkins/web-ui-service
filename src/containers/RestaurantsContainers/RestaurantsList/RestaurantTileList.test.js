import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RestaurantTileList from './';
import restaurant from '../../mocks/restaurantMock';

configure({ adapter: new Adapter()});

describe('<RestaurantTile />', () => {
  let RestaurantTileListTest;

  beforeEach(() => {
    RestaurantTileListTest = shallow(<RestaurantTileList restaurantData={restaurant.dishes}/>);
  });

  it('', () => {
  });
});