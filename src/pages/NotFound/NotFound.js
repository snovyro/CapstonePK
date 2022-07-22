import React from 'react';
import classes from './NotFound.module.css';
import logoNotFound from '../../assets/logoNotFound.svg';
import { useLocation } from 'react-router-dom';

const NotFound = () => {
	const location = useLocation();

	return (
		<div className={classes.centered}>
			<img src={logoNotFound} />
			<div data-testid="location-display">{location.pathname}</div>
			<div>
				<h1>PAGE NOT FOUND !!</h1>
			</div>
		</div>
	);
};

export default NotFound;
