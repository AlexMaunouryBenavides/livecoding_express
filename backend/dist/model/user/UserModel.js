import { db } from "../../config/db.js";
export class UserModel {
    static async findAll() {
        const [rows] = await db.query("SELECT * FROM user");
        return rows;
    }
}
//# sourceMappingURL=UserModel.js.map