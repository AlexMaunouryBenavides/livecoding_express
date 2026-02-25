import { UserModel } from "../model/user/UserModel.js";
import type { Response, Request } from "express";

export class UserController {
  static async getAll(req: Request, res: Response) {
    const users = await UserModel.findAll();
    res.json(users);
  }
}
