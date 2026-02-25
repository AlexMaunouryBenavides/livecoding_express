import { UserModel } from "../model/user/UserModel.js";
export class UserController {
    static async getAll(req, res) {
        const users = await UserModel.findAll();
        res.json(users);
    }
}
//# sourceMappingURL=userController.js.map