import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../config/firebase/firebase';

const login = async (passwordValue, emailValue, callback) => {
	try {
		const response = await signInWithEmailAndPassword(
			auth,
			emailValue,
			passwordValue
		);
		callback({ payload: response.user, success: true });
	} catch (error) {
		callback({ payload: error.message, success: false });
	}
};

const register = async (
	passwordValue,
	emailValue,
	passwordConfValue,
	callback
) => {
	try {
		const response = await createUserWithEmailAndPassword(
			auth,
			emailValue,
			passwordValue,
			passwordConfValue
		);
		callback({ payload: response.user, success: true });
	} catch (error) {
		callback({ payload: error.message, success: false });
	}
};

export const SERVICE_AUTH = {
	login,
	register,
};
