const Schema = require('mongoose').Schema;
const model = require('mongoose').model;

const mensajesSchema = new Schema({


    idUsuario: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Usuarios'
    },

    mensaje: {
        type: String,
        required: true
    },

    fecha: {
        type: Date,
        required: true
    }

});

const Mensajes = model('Mensajes', mensajesSchema);

module.exports = Mensajes;