import { ADD_USER, DELETE_USER } from './users.actions';
const initialState = {
  usersList: [],
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        usersList: state.usersList.concat(action.payload.userData),
      };

    case DELETE_USER: {
      const newList = state.usersList.filter(
        (user) => user.id !== action.payload
      );
      return {
        ...state,
        usersList: newList,
      };
    }

    default:
      return state;
  }
};
export default userReducer;
