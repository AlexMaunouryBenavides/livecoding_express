import type User from "../../interface/User.js";
import { db } from "../../config/db.js";

export class UserModel {
  static async findAll(): Promise<User[]> {
    const [rows] = await db.query("SELECT * FROM user");
    return rows as User[];
  }
}
