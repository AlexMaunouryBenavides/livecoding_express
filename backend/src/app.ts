import express from "express";
import dotenv from "dotenv";
import router from "./routes.js"
dotenv.config();
const app = express();
app.use(express.json())
app.use("/api",router)
const PORT = process.env.PORT;


app.listen(PORT, () => {
   console.log(`listening on http://localhost:${PORT}`);
});
