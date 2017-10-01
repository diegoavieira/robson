module.exports = app => {
	const cashs = app.controllers.cashs;
	const auth = app.controllers.auth;

	app.post('/createCash', auth.authenticated, cashs.createCash);

	app.post('/getCashReceipts', auth.authenticated, cashs.getCashReceipts);

	app.post('/getCashOutflows', auth.authenticated, cashs.getCashOutflows);

	app.post('/getCashExtract', auth.authenticated, cashs.getCashExtract);

	app.get('/getCashTotal', auth.authenticated, cashs.getCashTotal);
};