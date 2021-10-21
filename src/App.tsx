import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import { RootState } from './redux/reducers';

const App: React.FC = () => {
	const {
		auth: { isAuth },
	} = useSelector((state: RootState) => state);

	console.log(isAuth);
	return (
		<Switch>
			<Route path="/" exact>
				<Home />
			</Route>
			<Route path="/profile">
				{isAuth ? <Profile /> : <Redirect to="/" />}
			</Route>
		</Switch>
	);
};

export default App;
