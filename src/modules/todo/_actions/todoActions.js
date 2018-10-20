import { push } from 'connected-react-router';
import { get, post, patch } from '../../utils/httpRequest/httpMethods';

export function todoGetAll() {
  return dispatch =>
    get('/todo')
      .then(res => {
        dispatch({
          type: 'TODO_LIST',
          payload: res.data
        });
      })
      .catch(err => err);
}
