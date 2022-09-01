import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import router from './rotas'


const app = express()

app.use(express.json())
app.use(router)


mongoose.connect('mongodb+srv://matheusbeezerra:123456Ma@cluster0.xl02cdk.mongodb.net/?retryWrites=true&w=majority')

  .then((data) => {
    console.log('MongoDB Conectado com Sucesso')
  })

  .catch((err) => {
    console.log('Erro no MongoDB', err.message)
  })

app.listen(3333)