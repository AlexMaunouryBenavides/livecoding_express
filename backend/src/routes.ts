import express from "express";

const router = express.Router();
router.get("/health", (req, res) => {
   try {
      res.status(200).json({ status: 200, message: "hello world" });
   } catch (error) {
      console.log(error);
   }
});

export default router;
