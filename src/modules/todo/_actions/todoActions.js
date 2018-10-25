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

export function creatTodoItem(name, description) {
    return dispatch =>
        post('/todo', {name, description})
            .then(res => {
                // dispatch({
                //     type: 'CREAT_TODO_ITEM_SUCCESS'
                // });
                dispatch(push('/todos'));
            });

}