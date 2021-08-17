import express, { Request, Response } from 'express';
import { Product, ProductStore } from '../models/product'
 


const store = new ProductStore()

const index = async (_req: Request, res: Response) => {
    const products = await store.index();
    res.json(orders)
}




const show = async (_req: Request, res: Response) => {    
    try{       
      const product = await store.show(req.body.id)
       res.json(product) 
    }catch(err){
        res.status(400)
        res.json(err)
    }
    
}

const create = async (_req: Request, res: Response) => {
    const order: Product = {
      name:  req.body.name,
      user_id: req.body.price
    }
    try{
       const newProduct = await store.create(product);
       res.json(newProduct) 
    }catch(err){
        res.status(400)
        res.json(err)
    }
    
}

const product_routes = (app: express.Application) => {
    app.get('/products', index)
    app.get('/show/:id', show)
    app.post('/products', create)
}

export default product_routes;