import { ActionTypes } from "./../constants/action_types";

const authState = {
  accountId: null,
};

const authReducer = (state = authState, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_CONNECT_WALLET:
      return {
        ...state,
        accountId: action.payload?.accountId,
      };
    case ActionTypes.AUTH_LOGOUT:
      return {
        ...state,
        accountId: null,
      };
    default:
      return state;
  }
};

export default authReducer;
