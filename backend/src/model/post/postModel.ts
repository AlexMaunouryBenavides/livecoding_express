import type { IPost } from "../../interface/Post.ts";
import { db } from "../../config/db.js";
import type { ResultSetHeader } from "mysql2";

export class postModel {
  static async findAll(): Promise<IPost[]> {

    const [rows] = await db.query("SELECT * FROM post");

    return rows as IPost[];
  }
  
  static async findById(id: number): Promise<IPost[]> {

    const [IPost] = await db.query("SELECT * FROM post WHERE id = ? ", [id]);
    return IPost as IPost[];
  }

  static async create({ title, content, user_id }: IPost): Promise<number> {

    const [result] = await db.query<ResultSetHeader>("INSERT INTO post(title,content,user_id) VALUES(?,?,?)", [
      title,content,user_id
    ]);
    return result.insertId;

  }
}
