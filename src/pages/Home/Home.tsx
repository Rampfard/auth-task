import React from 'react';
import LoginForm from '../../Components/LoginForm/LoginForm';
import classes from './Home.module.css';

const Home: React.FC = () => {
	return (
		<div className={classes.home}>
			<LoginForm />
		</div>
	);
};

export default Home;
