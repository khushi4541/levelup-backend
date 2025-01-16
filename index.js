import "dotenv/config";
import express from "express";
import cors from "cors";
import userRoutes from './routes/usersRoutes.js'

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
