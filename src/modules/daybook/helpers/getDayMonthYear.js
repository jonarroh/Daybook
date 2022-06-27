const months = [
	'enero',
	'febrero',
	'marzo',
	'abril',
	'mayo',
	'junio',
	'julio',
	'agosto',
	'septiembre',
	'octubre',
	'noviembre',
	'diciembre'
];

const days = [
	'domingo',
	'lunes',
	'martes',
	'miércoles',
	'jueves',
	'viernes',
	'sábado'
];

const getDayMonthYear = dateString => {
	const fecha = new Date(dateString);

	return {
		day: fecha.getDate(),
		month: months[fecha.getMonth()],
		yearDay: `${fecha.getFullYear()},${days[fecha.getDay()]}`
	};
};

export default getDayMonthYear;
