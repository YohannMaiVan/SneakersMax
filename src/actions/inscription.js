export const CHANGE_MAIL_FIELD_VALUE = 'CHANGE_MAIL_FIELD_VALUE';
export const CHANGE_PASSWORD_FIELD_VALUE = 'CHANGE_PASSWORD_FIELD_VALUE';
export const SUBMIT_SIGN_UP = 'SUBMIT_SIGN_UP';
export const SAVE_REGISTRATION = 'SAVE_REGISTRATION';


export const changeMailFieldValue = (email) => ({
	type: CHANGE_MAIL_FIELD_VALUE,
	email
});

export const changePasswordFieldValue = (password) => ({
	type: CHANGE_PASSWORD_FIELD_VALUE,
	password
});

export const submitSignUp = () => ({
	type: SUBMIT_SIGN_UP
});

export const saveRegistration = (payload) => ({
	type: SAVE_REGISTRATION,
	payload
});