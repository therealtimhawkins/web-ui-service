const restaurantDataReducer = (state = {restaurantData: {}}, action) => {
  switch (action.type) {
    case 'SAVE': 
      return {
        restaurantData: state.restaurantData
      };
    default:
      return state;
  }
}

export default restaurantDataReducer;