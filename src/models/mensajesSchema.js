const Schema = require('mongoose').Schema;
const model = require('mongoose').model;

const mensajesSchema = new Schema({

    mensaje: {
        type: String,
        required: true
    },

    fecha: {
        type: Date,
        required: true
    },

    idUsuario: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Usuarios'
    }

});

const Mensajes = model('Mensajes', mensajesSchema);

module.exports = Mensajes;