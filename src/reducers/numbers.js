import actionsIds from '../constants/actions';

export default numbersReducer = (state = [], action) => {
  switch (action.type) {
    case actionsIds.GET_NUMBERS:
      return [...state, ...action.numbers];
    default:
      return state;
  }
}
