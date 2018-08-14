const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const tipoSchema = new Schema({
  nombre: String,
  Descripcion: String,
  
});

const Tipos_Eventos = mongoose.model("Tipos_Eventos", tipoSchema);

module.exports = Tipos_Eventos;
