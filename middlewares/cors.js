const allowedCors = ['https://practicum.yandex.ru', 'https://students-projects.ru', 'http://localhost:3000'];

// Функция, которая принимает объекты req (информация о запросе),
// res (объект ответа) и функцию next (для запуска следующего миддлвара)
function cors(req, res, next) {
	const { origin } = req.headers;
	if (allowedCors.includes(origin)) {
		// Если это наш друг,
		res.header('Access-Control-Allow-Origin', origin); 
	}

	next();
}

module.exports = cors;