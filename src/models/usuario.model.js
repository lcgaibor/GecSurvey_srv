import { Schema, model } from 'mongoose';

const usuarioSchema = new Schema({
    usuario: {type: String, required: true},
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    contrasenia: {type: String, required: true}
});

export default model('usuario',usuarioSchema);