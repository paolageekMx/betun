const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const actSchema = new Schema ({
 // _plantillaId: {type:Schema.Types.ObjectId, ref: 'actividades'},
  plantilla: [ { type: Schema.Types.ObjectId, ref: 'plantillas' } ],
 nombre:String,
  tipo_act:{type:String, enum:['Cita','Tarea','Pago','Milestone']},
  numero: Number,
  fecha_creacion: Date,
  duracion: Number, //en Días
})

const Actividades = mongoose.model('Actividades', actSchema);

module.exports = Actividades;







