import type User from "../../interface/User.js";
import { db } from "../../config/db.js";
import type { ResultSetHeader } from "mysql2";

export class UserModel {
  static async findAll(): Promise<User[]> {

    const [rows] = await db.query("SELECT * FROM user");

    return rows as User[];
  }
  static async create({ name, email }: User): Promise<number> {

    const [result] = await db.query<ResultSetHeader>("INSERT INTO user(name,email) VALUES(?,?)", [
      name, email
    ]);
    console.log(result)
    return result.insertId;

  }
}
