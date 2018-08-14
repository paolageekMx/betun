const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paqSchema = new Schema({
  nombre: String,
  servicios: [{descripcion:String, precio:number}],
  costo_total: number,
  precio_total: numnber,
})

const Paquetes = mongoose.model('Paquetes',paqSchema);
module.exports=Paquetes;