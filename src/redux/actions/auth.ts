import { SET_AUTH, SET_USER } from '../actionsTypes';

type SetUser = {
  type: typeof SET_USER;
  login: string;
  password: string;
};

export const setUser = (login: string, password: string): SetUser => ({
  type: SET_USER,
  login,
  password,
});

type SetAuth = {
  type: typeof SET_AUTH;
  isAuth: boolean;
};

export const setAuth = (isAuth: boolean): SetAuth => ({
  type: SET_AUTH,
  isAuth,
});

export type ActionTypes = SetUser | SetAuth;
