const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//const Tipos_Eventos = require('./tipoevento');


const eventoSchema = new Schema({
  nombre: String,
  tipo: [{type: Schema.Types.ObjectId, ref:'Tipos_Eventos'}],
  fecha_cotizacion:Date,
  fecha_contrato: Date,
  fecha_evento: Date,
  protagonista: Array,
  num_Protagonistas: Number,
  num_invitados: Number,
  tipoevento: [ { type: Schema.Types.ObjectId, ref: 'tipoevento' } ],
  quiencontrata:[{type:Schema.Types.ObjectId, ref:'protagonistas'}],
  croquis: String, //imagen del croquis
  programa: String, //Programa del evento para ser enviado
  maestro: String, //Maestro de Ceremonia
  actividades: [{ type: Schema.Types.ObjectId, ref:'actividades'}],
  paquete: [{type:Schema.Types.ObjectId, ref:'paquetes'}],

})



const Eventos = mongoose.model("Eventos", eventoSchema);

module.exports =Eventos;