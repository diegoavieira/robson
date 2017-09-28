module.exports = app => {
	const cashOutflows = app.controllers.cashOutflows;
	const auth = app.controllers.auth;

	app.post('/createCashOutflow', auth.authenticated, cashOutflows.createCashOutflow);

	app.post('/getCashOutflows', auth.authenticated, cashOutflows.getCashOutflows);
};