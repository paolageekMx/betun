const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const Actividades = require('./actividades');

const plantSchema = new Schema({
  nombre: String,
  img: String,  
  actividades: Array,
  tipo: String
})

const Plantillas = mongoose.model("Plantillas",plantSchema);
module.exports = Plantillas;