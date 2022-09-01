import { Request, Response } from "express";
import CotVenda from "../database/CotVenda";



const cotacaoCompra = {


  async index(req: Request, res: Response): Promise<Response> {

    let cotacao = await CotVenda.find()
    return res.json(cotacao)

  },

  async findById(req: Request, res: Response): Promise<Response> {
    
    const { id } = req.params
    let cotacao = await CotVenda.findById(id)
    return res.json(cotacao)

  },

  async create(req: Request, res: Response): Promise<Response> {
    
  
    
    
      let cotacao = await CotVenda.create(req.body)
      return res.json(cotacao)
  },

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    const {   
      cotacaoCompra,
      cotacaoVenda,
      dataHoraCotacao,
      dataCotacaoDolar,
      timeStamp,
      moeda } = req.body

    let cotacao = await CotVenda.findByIdAndUpdate(id,{
      cotacaoCompra: cotacaoCompra,
      cotacaoVenda: cotacaoVenda,
      dataHoraCotacao:dataHoraCotacao,
      dataCotacaoDolar: dataCotacaoDolar,
      timeStamp: timeStamp,
      moeda: moeda,
      
    })
    return res.json(cotacao)
  },

  async delete(req: Request, res: Response): Promise<Response> {
    
    const { id } = req.params
    let cotacao = await CotVenda.findByIdAndDelete(id)
    return res.json(cotacao)

  },


}


export default cotacaoCompra