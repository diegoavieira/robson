module.exports = app => {
	const cashReceipts = app.controllers.cashReceipts;
	const auth = app.controllers.auth;

	app.post('/createCashReceipt', auth.authenticated, cashReceipts.createCashReceipt);

	app.post('/getCashReceipts', auth.authenticated, cashReceipts.getCashReceipts);
};