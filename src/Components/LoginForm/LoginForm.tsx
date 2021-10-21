import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setAuth, setUser } from '../../redux/actions/auth';

import classes from './LoginForm.module.css';

const LoginForm: React.FC = () => {
	const dispatch = useDispatch();
	const { replace } = useHistory();

	const [loginInput, setLoginInput] = useState('');
	const [passwordInput, setPasswordInput] = useState('');

	const userInputHandler = (
		e: FormEvent<HTMLInputElement>,
		type: 'login' | 'password'
	) => {
		if (type === 'password') {
			setPasswordInput(e.currentTarget.value);
		}

		if (type === 'login') {
			setLoginInput(e.currentTarget.value);
		}
	};

	const sumbitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		dispatch(setUser(loginInput, passwordInput));
		dispatch(setAuth(true));

		replace('/profile');
	};

	const isUserValid = () => {
		return loginInput === 'developer21' && passwordInput === '123456'
			? true
			: false;
	};

	return (
		<form className={classes.form} onSubmit={sumbitHandler}>
			<div className={classes.control}>
				<label className={classes.label} htmlFor="login">
					Логин
				</label>
				<input
					className={classes.input}
					id="login"
					name="login"
					type="text"
					placeholder="Введите логин..."
					onChange={(e) => userInputHandler(e, 'login')}
				/>
			</div>
			<div className={classes.control}>
				<label className={classes.label} htmlFor="password">
					Пароль
				</label>
				<input
					className={classes.input}
					id="password"
					name="password"
					type="password"
					placeholder="Введите пароль..."
					onChange={(e) => userInputHandler(e, 'password')}
				/>
			</div>
			<button
				className={classes.button}
				type="submit"
				disabled={!isUserValid()}
			>
				Войти
			</button>
		</form>
	);
};

export default LoginForm;
