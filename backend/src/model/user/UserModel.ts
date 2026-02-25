import type User from "../../interface/User.js";
import { db } from "../../config/db.js";

 interface ResultCreateUser{
  fieldCount: number,
  affectedRows: number,
  insertId: number,
  info: string,
  serverStatus: number,
  warningStatus:number,
  changedRows: number
}
export class UserModel {
  static async findAll(): Promise<User[]> {

    const [rows] = await db.query("SELECT * FROM user");
 
    return rows as User[];
  }
  static async create({name,email}:User): Promise<number> {

    const [result] = await db.query("INSERT INTO user(name,email) VALUES(?,?)",[
      name,email
    ]) as ResultCreateUser[];
 console.log(result)
 if (result){
   return result.insertId ;
 }
    
  }
}
