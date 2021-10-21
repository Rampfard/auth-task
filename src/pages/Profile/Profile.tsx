import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';

import kittyImg from '../../assests/kitty-candy.png';

import classes from './Profile.module.css';

const Profile: React.FC = () => {
	const {
		auth: { user },
	} = useSelector((state: RootState) => state);
	return (
		<section className={classes.profile}>
			<h1>
				Welcome <span>{user.login}</span>!
			</h1>
			<div className={classes['img-box']}>
				<img src={kittyImg} alt="kitty" />
			</div>
		</section>
	);
};

export default Profile;
