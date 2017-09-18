import express from 'express';
import consign from 'consign';
import morgan from 'morgan';
import compress from 'compression'
import bodyParser from 'body-parser';

const app = express();

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
} else if (process.env.NODE_ENV === 'production') {
	app.use(compress());
};

app.set('json spaces', 2);
app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

consign({cwd: 'app', verbose: false})
	.include('controllers')
	.then('routes')
	.into(app);

app.use(express.static('./public'));

module.exports = app;
