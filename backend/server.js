import express, { json } from "express";
import dotenv from "dotenv";
const app = express();
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./DB/connectToMongoDB.js";
const PORT = process.env.PORT || 5000;
dotenv.config();
app.use(express.json());
app.use("/api/auth", authRoutes);

// app.get("/", (req, res) => {
//   res.send("Hello World testing server!");
// });

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});
