import express, { Request, Response } from 'express';
import { Order, OrderStore } from '../models/order'

const store = new OrderStore()

const index = async (_req: Request, res: Response) => {
    try{
       const orders = await store.index();
       res.json(orders) 
    }catch(err){
        res.status(400)
        res.json(err)
    }    
}

const show = async (_req: Request, res: Response) => {    
    try{       
      const order = await store.show(req.body.id)
       res.json(orders) 
    }catch(err){
        res.status(400)
        res.json(err)
    }
    
}

const create = async (_req: Request, res: Response) => {
    const order: Order = {
      status:  req.body.status,
      user_id: req.body.user_id
    }
    try{
       const newOrder = await store.create(order);
       res.json(newOrder) 
    }catch(err){
        res.status(400)
        res.json(err)
    }
    
}

const order_routes = (app: express.Application) => {
    app.get('/orders', index)
    app.get('/orders/:id', show)
    app.post('/orders', create)
}

export default order_routes;