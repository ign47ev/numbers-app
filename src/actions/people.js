import actionIds from '../constants/actions';

const addPerson = (person) => {
  return {
    type: actionIds.ADD_PERSON,
    person,
  };
};

const deletePerson = (personId) => {
  return {
    type: actionIds.DELETE_PERSON,
    personId,
  };
};

export default { addPerson, deletePerson };
