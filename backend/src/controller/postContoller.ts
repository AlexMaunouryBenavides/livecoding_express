import type { Response, Request } from "express";
import { postModel } from "../model/post/postModel.js";

export class postController {
  static async getAll(req: Request, res: Response) {
    
      const users = await postModel.findAll();
      res.json(users);
    
  }
  static async getById(req: Request, res: Response){
    const { id } = req.params;
      const parsId = parseInt(id as string) 
    const users = await postModel.findById(parsId);
      res.json(users);
  }
  static async create(req: Request, res: Response) {
    const users = await postModel.create(req.body);
    res.json(users);
  }
  
}
