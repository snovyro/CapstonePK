import React, { useState } from 'react';
import useInput from '@hooks/useInput';
import Logo from '@assets/UserLogo.png';
import './LoginForm.css';
import { useDispatch } from 'react-redux';
import { authActions } from '@config/redux/reducers/auth';
import { SERVICE_AUTH } from '@services/auth.service';
import ErrorModal from '@components/UI/ErrorModal';

const LoginForm = ({ onchangeAuthPage, onClose }) => {
	const [errorMsg, setErrorMsg] = useState(null);
	const dispatch = useDispatch();
	const isNotEmpty = (value) => value.trim() !== '';
	const isEmail = (value) => value.includes('@');

	const {
		value: passwordValue,
		hasError: passwordHasError,
		isValid: passwordIsValid,
		inputBlurHandler: passwordBlurHandler,
		valueChangeHandler: passwordChangeHandler,
		reset: passwordResetHandler,
	} = useInput(isNotEmpty);

	const {
		value: EmailValue,
		hasError: emailHasError,
		isValid: emailIsValid,
		inputBlurHandler: emailBlurHandler,
		valueChangeHandler: emailChangeHandler,
		reset: emailResetHandler,
	} = useInput(isEmail);

	let formIsValid = false;

	if (passwordIsValid && emailIsValid) formIsValid = true;

	const submitHandler = async (e) => {
		e.preventDefault();

		if (formIsValid) {
			SERVICE_AUTH.login(passwordValue, EmailValue, (response) => {
				if (response.success) {
					dispatch(authActions.login(response.payload));
					onClose();
				} else {
					setErrorMsg(response.payload);
				}
			});
		}
		passwordResetHandler();
		emailResetHandler();
	};

	const passwordClasses = passwordHasError
		? 'form-control invalid'
		: 'form-control';

	const emailClasses = emailHasError
		? 'form-control invalid'
		: 'form-control';

	const errorHandler = () => {
		setErrorMsg(false);
	};

	return (
		<div>
			{errorMsg && (
				<div>
					<ErrorModal onClose={errorHandler}>
						{errorMsg}
					</ErrorModal>
				</div>
			)}
			<form className="form-layout" onSubmit={submitHandler}>
				<img
					alt=""
					style={{
						maxWidth: '225px',
						alignSelf: 'center',
						padding: '2rem 0',
					}}
					src={Logo}
				></img>
				<div className="control-group">
					<div className={emailClasses}>
						<label htmlFor="name">Email</label>
						<input
							type="email"
							id="email"
							onChange={emailChangeHandler}
							onBlur={emailBlurHandler}
							value={EmailValue}
						/>
						{emailHasError && (
							<p className="error-text">
								Please enter your Email
							</p>
						)}
					</div>
					<div className={passwordClasses}>
						<label htmlFor="name">Password</label>
						<input
							type="password"
							id="password"
							autoComplete="on"
							onChange={passwordChangeHandler}
							onBlur={passwordBlurHandler}
							value={passwordValue}
						/>

						{passwordHasError && (
							<p className="error-text">
								Please enter your Password
							</p>
						)}
					</div>
				</div>
				<p>
					Belum punya akun?{' '}
					<button
						className="button-disini"
						onClick={onchangeAuthPage}
					>
						Register
					</button>
				</p>
				<div className="form-actions">
					{formIsValid ? (
						<button className="bg-someting-green hover:bg-someting-dark-green text-white font-bold py-2 px-4 rounded my-4">
							Masuk
						</button>
					) : (
						<button
							disabled
							className="bg-someting-green hover:bg-someting-dark-green text-white font-bold py-2 px-4 rounded my-4 opacity-50 cursor-not-allowed"
						>
							Masuk
						</button>
					)}

					<button
						className="bg-someting-green hover:bg-someting-dark-green text-white font-bold py-2 px-4 rounded my-4"
						onClick={onClose}
					>
						Keluar
					</button>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
