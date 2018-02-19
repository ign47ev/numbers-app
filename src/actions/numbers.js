import actionIds from '../constants/actions';
import * as api from './api';

const getNumbers = () => dispatch => {
  return api.getNumbers()
    .then(response => {
      console.log(response.data);
      dispatch({
        type: actionIds.GET_NUMBERS,
        numbers: response.data,
      });
    })
    .catch(error => {
      console.error('error', error)
    });
};

export default { getNumbers };
