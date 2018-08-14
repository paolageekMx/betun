const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const usuarioSchema = new Schema({
  nombre: String,
  ap_materno:String,
  ap_Paterno:String,
  Descripcion: String,
  Fech_Nac: Date,
  Genero: String,
  evento:[{type:ObjectId, ref:'eventos'}],
  email:String,
  tipo: {type:String, enum:['contrata','festejado','invitado']}
});

const Usuarios = mongoose.model("usuarioSchema", usuarioSchema);

module.exports = Usuarios;
