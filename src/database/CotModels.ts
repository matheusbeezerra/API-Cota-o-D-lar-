import { Schema } from "mongoose";
import mongoose from "mongoose";


const cotVenda = new Schema({

  cotacaoCompra: String,
  cotacaoVenda: String,
  dataHoraCotacao: Number,
  dataCotacaoDolar: Number,
  timeStamp: Number,
  moeda: Number,
  
  

},
  { timestamps: true })

export default mongoose.model('Cotacao', cotVenda)