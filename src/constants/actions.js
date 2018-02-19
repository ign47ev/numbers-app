import keymirror from 'keymirror';

const actionIds = keymirror({
  SET_TOKEN: null,
  CLEAR_TOKEN: null,

  GET_NUMBERS: null,

  ADD_PERSON: null,
  DELETE_PERSON: null,
});

export default { ...actionIds };
