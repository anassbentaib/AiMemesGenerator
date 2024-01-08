import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import path from "path";
import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";
import authRoutes from "./routes/auth.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const _dirname = path.dirname("");
const buildPath = path.join(_dirname, "../frontend/dist");
app.use(express.static(buildPath));
app.use(
  cors({
    origin: "*",
  })
);
app.use("/create-post", postRoutes);
app.use("/generate-image", dalleRoutes);
app.use("/auth", authRoutes);

app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Hello from DALL.E!",
  });
});

const startServer = async () => {
  try {
    connectDB(
      "mongodb+srv://DALLE-AI:rphAnTMZDXyYDxak@cluster0.xufew4u.mongodb.net/?retryWrites=true&w=majority"
    );
    app.listen(8080, () =>
      console.log(`Server Running in the 8080  : http://localhost:${8080}`)
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
