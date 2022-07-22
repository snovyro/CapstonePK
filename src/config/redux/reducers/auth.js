import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
	user: null,
	isAuthenticated: false,
};

const authSlice = createSlice({
	name: 'authentication',
	initialState: initialAuthState,
	reducers: {
		login(state, action) {
			state.user = action.payload;
			state.isAuthenticated = true;
			localStorage.setItem('USER_TOKEN', action.payload.accessToken);
		},
		logout(state) {
			state.isAuthenticated = false;
			localStorage.removeItem('USER_TOKEN');
			state.user = null;
		},
	},
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
