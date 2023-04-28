import { Schema, model } from 'mongoose';

const encuestaSchema = new Schema({
    usuario: String,
    encuestado: {},
    encuesta: {}
});

export default model('encuesta',encuestaSchema);