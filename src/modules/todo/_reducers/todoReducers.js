import _ from 'lodash';

const initialState = {
  todoList: [], // User list for admin
  todoCurrentInfo: {}
};

const todo = (state = initialState, action) => {
  switch (action.type) {
    case 'TODO_LIST':
      return {
        ...state,
        todoList: action.payload
      };

    case 'TODO_CURRENT_INFO':
      return {
        ...state,
        todoCurrentInfo: action.payload
      };


    default:
      return state;
  }
};

export default todo;
