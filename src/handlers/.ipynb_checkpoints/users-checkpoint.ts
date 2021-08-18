import express, { Request, Response } from 'express';
import { User, UserStore } from '../models/user'



const store = new UserStore()

const index = async (_req: Request, res: Response) => {
    const users = await store.index();
    res.json(users)
}


const show = async (req: Request, res: Response) => {    
    try{       
      const user = await store.show(req.body.id)
       res.json(user) 
    }catch(err){
        res.status(400)
        res.json(err)
    }
    
}

const create = async (req: Request, res: Response) => {
    const order: User = {
      username: req.body.username,
      firstname:  req.body.firstname,
      lastname: req.body.lastname,
      password: req.body.password
    }
    try{
       const newOrder = await store.create(order);
       res.json(newOrder) 
    }catch(err){
        res.status(400)
        res.json(err)
    }
    
}


const user_routes = (app: express.Application) => {
    app.get('/users', index)
    app.get('/users/:id', show)
    app.post('/users', create)
}

export default user_routes;