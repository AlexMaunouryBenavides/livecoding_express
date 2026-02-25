import type User from "../../interface/User.js";
export declare class UserModel {
    static findAll(): Promise<User[]>;
    static create({ name, email }: User): Promise<number>;
}
//# sourceMappingURL=UserModel.d.ts.map