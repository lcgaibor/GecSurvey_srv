import express from 'express';
const bodyParser = require('body-parser');

import LoginRoute from './routes/login.routes';
import UsuarioRoute from './routes/usuario.routes';
import EncuestaRoute from './routes/encuesta.routes';

const app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.set('port', process.env.PORT || 3000);
app.use(express.json());

app.use('/loginVin',LoginRoute);
app.use('/usuarioVin',UsuarioRoute);
app.use('/encuestaVin',EncuestaRoute);

export default app;