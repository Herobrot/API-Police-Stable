const Schema = require('mongoose').Schema;
const model = require('mongoose').model;

const usuariosSchema = new Schema({


    nombre:{
        type: String,
        required: true
    },

    apellidos:{
        type: String,
        required: true
    },

    numeroPlaca: {
        type: String,
        required: true
    }
    
});

const Usuarios = model('Usuarios', usuariosSchema);

module.exports = Usuarios