module.exports = app => {
	const users = app.controllers.users;
	const auth = app.controllers.auth;

	app.post('/signup', /*auth.authenticated,*/ users.signup);

	app.post('/login', users.login);

	app.route('/users')
		//.all(auth.authenticated)
		.get(users.getUsers);
};