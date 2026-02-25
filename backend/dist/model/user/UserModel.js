import { db } from "../../config/db.js";
export class UserModel {
    static async findAll() {
        const [rows] = await db.query("SELECT * FROM user");
        return rows;
    }
    static async create({ name, email }) {
        const [result] = await db.query("INSERT INTO user(name,email) VALUES(?,?)", [
            name, email
        ]);
        console.log(result);
        if (result) {
            return result.insertId;
        }
    }
}
//# sourceMappingURL=UserModel.js.map