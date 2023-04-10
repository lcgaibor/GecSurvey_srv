import express from 'express';
const bodyParser = require('body-parser');

import LoginRoute from './routes/login.routes';

const app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.set('port', process.env.PORT || 3000);
app.use(express.json());

app.use('/login',LoginRoute);
export default app;