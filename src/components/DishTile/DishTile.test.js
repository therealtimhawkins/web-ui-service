import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DishTile from './';

configure({ adapter: new Adapter()});

describe('<DishTile />', () => {
  let DishTileTest;
  let dishData = {
    vegan: true,
    name: 'Carrot Soup',
    description: 'Carrot and Corriander Soup',
    price: '£5.00'
  };

  beforeEach(() => {
    DishTileTest = shallow(<DishTile dishData={dishData} />);
  });

  it('first div should have className dishTileVegan when dishData.vegan : true', () => {
    expect(DishTileTest.find('div').first().hasClass('dishTileVegan')).toEqual(true);
  });

  it('first div should have className dishTile when dishData.vegan : false', () => {
    DishTileTest.setProps({ dishData: {
      vegan: false,
    }});
    expect(DishTileTest.find('div').first().hasClass('dishTileVegan')).toEqual(false);
  });

  it('should display the name, description and price of the dish',() => {
    expect(DishTileTest.contains('Carrot Soup')).toEqual(true);
    expect(DishTileTest.contains('Carrot and Corriander Soup')).toEqual(true);
    expect(DishTileTest.contains('£5.00')).toEqual(true);
  });

  it('should display Vegan! when dishData.vegan : true', () => {
    expect(DishTileTest.contains('Vegan!')).toEqual(true);
  });

  it('should not display Vegan! when dishData.vegan : false', () => {
    DishTileTest.setProps({ dishData: {
      vegan: false
    }});
    expect(DishTileTest.contains('Vegan!')).toEqual(false);
  });
});