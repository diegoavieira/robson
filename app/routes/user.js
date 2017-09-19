module.exports = app => {
	const user = app.controllers.user;
	const auth = app.controllers.auth;

	app.post('/signup', /*auth.authenticated,*/ user.signup);

	app.post('/login', user.login);

	app.route('/users')
		//.all(auth.authenticated)
		.get(user.getUsers);
};