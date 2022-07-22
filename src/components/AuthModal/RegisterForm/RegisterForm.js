import React, { useState } from 'react';
import useInput from '@hooks/useInput';
import Logo from '@assets/UserLogo.png';
import './RegisterForm.css';
import { useDispatch } from 'react-redux';
import { SERVICE_AUTH } from '@services/auth.service';
import { authActions } from '@config/redux/reducers/auth';
import ErrorModal from '@components/UI/ErrorModal';

const RegisterForm = ({ onchangeAuthPage, onClose }) => {
	const [errorMsg, setErrorMsg] = useState(null);
	const dispatch = useDispatch();
	const isNotEmpty = (value) => value.trim() !== '';
	const isEmail = (value) => value.includes('@');
	const [displayName, setDisplayName] = useState('');

	const {
		value: passwordValue,
		hasError: passwordHasError,
		isValid: passwordIsValid,
		inputBlurHandler: passwordBlurHandler,
		valueChangeHandler: passwordChangeHandler,
		reset: passwordResetHandler,
	} = useInput(isNotEmpty);

	const {
		value: passwordConfValue,
		hasError: passwordConfHasError,
		isValid: passwordConfIsValid,
		inputBlurHandler: passwordConfBlurHandler,
		valueChangeHandler: passwordConfChangeHandler,
		reset: passwordConfResetHandler,
	} = useInput(isNotEmpty);

	const {
		value: emailValue,
		hasError: emailHasError,
		isValid: emailIsValid,
		inputBlurHandler: emailBlurHandler,
		valueChangeHandler: emailChangeHandler,
		reset: emailResetHandler,
	} = useInput(isEmail);

	let passwordMatch = false;

	if (
		passwordValue === passwordConfValue &&
		passwordIsValid &&
		passwordConfIsValid
	)
		passwordMatch = true;

	let formIsValid = false;

	if (passwordMatch && emailIsValid) {
		formIsValid = true;
	}

	const errorHandler = () => {
		setErrorMsg(false);
	};

	const submitHandler = async (e) => {
		e.preventDefault();

		if (formIsValid) {
			SERVICE_AUTH.register(
				passwordValue,
				emailValue,
				passwordConfValue,
				(response) => {
					if (response.success) {
						dispatch(authActions.login(response.payload));
						onClose();
					} else {
						setErrorMsg(response.payload);
					}
				}
			);
			passwordResetHandler();
			passwordConfResetHandler();
			emailResetHandler();
		}
	};

	const passwordClasses = passwordHasError
		? 'form-control invalid'
		: 'form-control';

	const emailClasses = emailHasError
		? 'form-control invalid'
		: 'form-control';

	const passwordConfClasses = passwordConfHasError
		? 'form-control invalid'
		: 'form-control';

	const displayNameHandler = (e) => {
		setDisplayName(e.target.value);
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
					<div className={passwordClasses}>
						<label htmlFor="name">Nama Lengkap</label>
						<input
							type="text"
							id="name"
							onChange={displayNameHandler}
							value={displayName}
						/>
					</div>
					<div className={emailClasses}>
						<label htmlFor="name">Email</label>
						<input
							type="email"
							id="current--email"
							onChange={emailChangeHandler}
							onBlur={emailBlurHandler}
							value={emailValue}
						/>
						{emailHasError && (
							<p className="error-text">
								Please enter your Email
							</p>
						)}
					</div>
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
				<div className={passwordConfClasses}>
					<label htmlFor="name">Konfirmasi ulang password</label>
					<input
						type="password"
						id="password-conf"
						autoComplete="on"
						onChange={passwordConfChangeHandler}
						onBlur={passwordConfBlurHandler}
						value={passwordConfValue}
					/>
					{passwordConfHasError && (
						<p className="error-text">
							Please Confirm your password
						</p>
					)}
				</div>
				<p>
					Sudah punya akun?{' '}
					<button
						className="button-disini"
						onClick={onchangeAuthPage}
					>
						Login
					</button>
				</p>
				<div className="form-actions">
					{formIsValid ? (
						<button className="bg-someting-green hover:bg-someting-dark-green text-white font-bold py-2 px-4 rounded my-4">
							Daftar
						</button>
					) : (
						<button
							disabled
							className="bg-someting-green hover:bg-someting-dark-green text-white font-bold py-2 px-4 rounded my-4 opacity-50 cursor-not-allowed"
						>
							Daftar
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

export default RegisterForm;
