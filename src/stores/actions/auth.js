import { ActionTypes } from "./../constants/action_types";

export const connectWallet = (payload) => {
  return {
    type: ActionTypes.AUTH_CONNECT_WALLET,
    payload,
  };
};

export const login = (payload) => {
  return {
    type: ActionTypes.AUTH_LOGIN,
    payload,
  };
};

export const logout = () => {
  return {
    type: ActionTypes.AUTH_LOGOUT,
  };
};
