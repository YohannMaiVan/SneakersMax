export const CHANGE_SIGNUP_FIELD_VALUE = 'CHANGE_SIGNUP_FIELD_VALUE';

export const changeSignUpFieldValue = (field, value) => {
	type: CHANGE_SIGNUP_FIELD_VALUE,
	field,
	value
};