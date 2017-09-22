module.exports = app => {
	const tickets = app.controllers.tickets;
	const auth = app.controllers.auth;

	app.post('/createTicket', auth.authenticated, tickets.createTicket);

	app.post('/getTickets', auth.authenticated, tickets.getTickets);
};