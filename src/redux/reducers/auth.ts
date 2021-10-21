import { ActionTypes } from '../actions/auth';
import { SET_AUTH, SET_USER } from '../actionsTypes';

interface IUser {
	login: '' | string;
	password: '' | string;
}

const initialState = {
	user: {} as IUser,
	isAuth: false as boolean,
};

export type InitialState = typeof initialState;

export const auth = (
	state = initialState,
	action: ActionTypes
): InitialState => {
	switch (action.type) {
		case SET_USER:
			return {
				...state,
				user: {
					login: action.login,
					password: action.password,
				},
			};

		case SET_AUTH:
			return {
				...state,
				isAuth: action.isAuth,
			};

		default:
			return state;
	}
};
