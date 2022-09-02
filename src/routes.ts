import { Router } from "express";
import cotacaoCompra from "./cotacao/CotControllers";

const router = Router()


router.get('/cotacao', cotacaoCompra.index)

router.get('/cotacao/:id', cotacaoCompra.findById)

router.post('/cotacao', cotacaoCompra.create)

router.put('/cotacao/:id', cotacaoCompra.update)

router.delete('/cotacao/:id', cotacaoCompra.delete)



export default router
