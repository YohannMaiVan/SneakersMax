export const CONNEXION_CHANGE_MAIL_FIELD_VALUE = 'CONNEXION_CHANGE_MAIL_FIELD_VALUE';
export const CONNEXION_CHANGE_PASSWORD_FIELD_VALUE = 'CONNEXION_CHANGE_PASSWORD_FIELD_VALUE';
export const SUBMIT_SIGN_IN = 'SUBMIT_SIGN_IN';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const DISCONNECT = 'DISCONNECT';

export const connexionChangeMailFieldValue = (email) => ({
	type: CONNEXION_CHANGE_MAIL_FIELD_VALUE,
	email
});

export const connexionChangePasswordFieldValue = (password) => ({
	type: CONNEXION_CHANGE_PASSWORD_FIELD_VALUE,
	password
});

export const submitSignIn = () => ({
	type: SUBMIT_SIGN_IN
});

export const saveUserData = (payload) => ({
	type: SAVE_USER_DATA,
	payload
});

export const disconnect = () => ({
	type: DISCONNECT
});