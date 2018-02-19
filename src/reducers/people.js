import actionIds from '../constants/actions';

const initialState = {
  persons: [
    { id: 0, name: 'Piter' },
  ]
};

export default peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionIds.ADD_PERSON:
      return {
        persons: [...state.persons, action.person],
      };
    case actionIds.DELETE_PERSON:
      return {
        persons: state.persons.filter(person => person.id !== action.personId),
      };
    default:
      return state;
  }
}
