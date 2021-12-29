import express, { Application, Request, Response } from "express";
import lyrics from "src/lyrics.json";

var subdomain = require("express-subdomain");
var router = express.Router();

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(subdomain("api", router));

//route
app.get("/", async (req: Request, res: Response) => {
  console.log("frontend");
});

//api subdomain route
router.get("/", async (req: Request, res: Response) => {
  const lyric = lyrics[Math.floor(Math.random() * lyrics.length)];
  res.header("Content-Type", "application/json");
  return res.status(200).send({
    message: lyric,
  });
});

//unhandled routes
app.all("*", async (req: Request, res: Response) => {
  return res.status(404).send({
    message: "Route not found.",
  });
});

app.listen(PORT, (): void => {
  console.log(`Connected successfully on port ${PORT}`);
});
