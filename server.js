import app from './config/express';
import {sequelize} from './config/database';

sequelize.authenticate().then(() => {
	return sequelize.sync().then(() => {
		console.log('Models are sync successfuly.');
		console.log('Database connected successfuly.')
	}).catch(error => {
		console.log('Models not sync: ', error.message)
	});
}).then(() => {
	app.listen(app.get('port'), () => {
		console.log(`Server running at ${app.get('port')}.`);
	});
}).catch(error => {
	console.log('Unable to connect to the database: ', error.message);
});