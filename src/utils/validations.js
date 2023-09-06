// True is valid
// False is not valid

const validateCPF = (cpf) => {
	const regex = /^((\d{3}).(\d{3}).(\d{3})-(\d{2}))*$/;
	return regex.test(cpf);
};

const validateEmail = (email) => {
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return regex.test(email);
};

const validateDate = (date) => {
	return date.toString() !== 'Invalid Date' && date < new Date();
};

module.exports = { validateCPF, validateEmail, validateDate };
