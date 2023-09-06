// Date => DD/MM/YYYY
const dateToString = (date) => {

};

// DD/MM/YYYY => Date
const stringToDate = (date) => {
	const dateFormated = date.split('/').reverse().join('-');
	return new Date(dateFormated);
};

module.exports = { dateToString, stringToDate };
