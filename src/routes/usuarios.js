const express = require("express");
const Usuarios = require("../models/usuariosSchema");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const usuarios = await Usuarios.find();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/:_id", async (req, res) => {
    try {
        const usuario = await Usuarios.findById({_id: req.params._id});
        if (usuario){
            res.json(usuario);
        } else {
            res.status(404).json({ message: "Usuario no encontrado" });
        }
    } catch (error){
        res.status(500).json({ error: error.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const usuario = new Usuarios(req.body);
        await usuario.save();
        res.status(201).json({ message: "Usuario creado exitosamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put("/:_id", async (req, res) => {
    try {
        const result = await Usuarios.findByIdAndUpdate(req.params._id, req.body, {new: true});
        if(result){
            res.json(result);
        } else{
            res.status(404).json({ message: "Usuario no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete("/:_id", async (req, res) => {
    try {
        const result = await Usuarios.findByIdAndDelete(req.params._id);
        if(result){
            res.json({ message: "Usuario eliminado exitosamente" });
        } else{
            res.status(404).json({ message: "Usuario no encontrado" });
        }     
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;