import { GET_TOKEN } from '../constants/auth';

const initialState = { token: 'TOKEN_VALUE' };

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TOKEN:
      return {
        token: action.token,
      };
    default:
      return state;
  }
}
