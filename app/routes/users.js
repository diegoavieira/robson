module.exports = app => {
	const users = app.controllers.users;
	const auth = app.controllers.auth;

	app.post('/signup', /*auth.authenticated,*/ users.signup);

	app.post('/login', users.login);

	app.get('/logout', auth.authenticated, users.logout);

	app.get('/users', auth.authenticated, users.getUsers);
};