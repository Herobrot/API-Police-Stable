const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const morgan = require('morgan');
const signale = require('signale');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => {
    signale.fatal(new Error("Error de conexión a la base de datos:"));
});

db.once("open", () => {
    signale.success("Conexión exitosa a la base de datos MongoDB.");
});

app.use(express.json());
app.use(morgan('dev'));
app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

const apiRouterUsuarios = require("./routes/usuarios")
app.use("/usuarios", apiRouterUsuarios);

const apiRouterMensajes = require("./routes/mensajes")
app.use("/mensajes", apiRouterMensajes);

const apiRouterNotificaciones = require("./routes/notificaciones");
app.use("/notificaciones", apiRouterNotificaciones);

const apiRouterAvisos = require("./routes/avisos");
app.use("/avisos", apiRouterAvisos);

app.get("/", (req, res) => {
    res.status(200).send({message: "Bienvenido a la API de policia"});
})

app.listen(port, () => {
    signale.success("Servidor iniciado en el puerto:", port);
})