import "dotenv/config";
import express from "express";
import cors from "cors";
import userRoutes from "./routes/usersRoutes.js";
import habitsRoutes from "./routes/habitsRoutes.js";
import friendsRoutes from "./routes/friendsRoutes.js"

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);

app.use("/habits", habitsRoutes);

app.use("/friends", friendsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
