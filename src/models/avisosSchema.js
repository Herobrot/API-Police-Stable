const Schema = require('mongoose').Schema;
const model = require('mongoose').model;

const avisoSchema = new Schema({
    
    mensaje: {
        type: String,
        required: true
    },
    
    fecha: {
        type: Date,
        required: true
    },

    categoria:{
        type: String,
        required: true,
        enum: ["Robo", "Accidente", "Avistamiento", "Secuestro", "Vandalismo", "Allanamiento de morada"
        ,"Trata de personas", "Otros"]
    },

    estatus: {
        type: String,
        required: true,
        enum: ["Reciente", "En curso", "Finalizado"]
    }
})

const Avisos = model('Avisos', avisoSchema);

module.exports = Avisos