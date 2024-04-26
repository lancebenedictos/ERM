import express, { Response, Request } from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/health", async (req: Request, res: Response) => {
  res.json({ message: "Success" });
});

app.listen(4000, () => {
  console.log("Server running");
});
