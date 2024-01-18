const Schema = require('mongoose').Schema;
const model = require('mongoose').model;

const notificacionesSchema = new Schema({


    idUsuario: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Usuarios'
    },

    titulo: {
        type: String,
        required: true
    },

    cuerpo: {
        type: String,
        required: true
    },
    
    fecha: {
        type: Date,
        required: true
    }

});

const Notificaciones = model('Notificaciones', notificacionesSchema);

module.exports = Notificaciones;