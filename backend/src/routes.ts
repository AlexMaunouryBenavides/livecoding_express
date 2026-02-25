import express from "express";
import { UserController } from "./controller/userController.js";

const router = express.Router();
router.get("/health", (req, res) => {
   try {
      res.status(200).json({ status: 200, message: "hello world" });
   } catch (error) {
      console.log(error);
   }
});
router.get("/users",UserController.getAll)
router.post("/users",UserController.create)

export default router;
