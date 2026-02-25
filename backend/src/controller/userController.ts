import { UserModel } from "../model/user/UserModel.js";
import type { Response, Request } from "express";

export class UserController {
  static async getAll(req: Request, res: Response) {
    if (req.query.email) {
      const { email } = req.query;
      const users = await UserModel.findByEmail(email as string);
      res.json(users);
    } else {
      const users = await UserModel.findAll();
      res.json(users);
    }
  }

  static async create(req: Request, res: Response) {
    const users = await UserModel.create(req.body);
    res.json(users);
  }
}
