import React, { useState } from 'react';
import LoginForm from './LoginForm/LoginForm';
import Modal from '../UI/Modal';
import RegisterForm from './RegisterForm/RegisterForm';

const AuthModal = (props) => {
	const AUTH_PAGES = {
		LOGIN: 'login',
		REGISTER: 'register',
	};
	const [authPage, setAuthPage] = useState(AUTH_PAGES.LOGIN);

	const handleChangeAuthPage = () => {
		setAuthPage(
			authPage === AUTH_PAGES.LOGIN
				? AUTH_PAGES.REGISTER
				: AUTH_PAGES.LOGIN
		);
	};

	return (
		<Modal onClose={props.onClose}>
			{authPage === AUTH_PAGES.LOGIN ? (
				<LoginForm
					onchangeAuthPage={handleChangeAuthPage}
					onClose={props.onClose}
				/>
			) : (
				<RegisterForm
					onchangeAuthPage={handleChangeAuthPage}
					onClose={props.onClose}
				/>
			)}
		</Modal>
	);
};

export default AuthModal;
