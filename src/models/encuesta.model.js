import { Schema, model } from 'mongoose';

const encuestaSchema = new Schema({
    usuario: {type: String},
    fechaCreacion: {
        type: Date,
        default: Date.now
    }
});

export default model('encuesta',encuestaSchema);