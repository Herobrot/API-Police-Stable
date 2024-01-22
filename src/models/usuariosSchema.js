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
    },

    password:{
        type: String,
        required: true
    },

    rango:{
        type: String,
        required: true,
        enum: ["Policía", "Policía Tercero", "Policía Segundo", "Policía Primero",
            "Policía Tercera", "Policía Segunda", "Policía Primera", "Suboficial", "Segundo Suboficial", 
            "Oficial", "Primer Suboficial", "Subinspector", "Subinspectora", "Inspector", "Inspectora",
            "Segundo Inspector", "Inspectora Jefe", "Inspector Jefe", "Primer Inspector", 
            "Inspector General", "Inspectora General", "Segundo Superintendente", "Comisario",
            "Comisaria", "Primer Superintendente", "Comisario Jefe", "Comisaria Jefe", "Superintendente General",
            "Comisario General", "Comisaria General", "Becario", "Becaria"]
    }
    
});

const Usuarios = model('Usuarios', usuariosSchema);

module.exports = Usuarios