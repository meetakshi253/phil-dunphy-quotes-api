import express, { Application, Request, Response } from "express";

const app: Application = express();
const port = 3000;

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get(
    "/",
    async (req: Request, res: Response): Promise<Response> => {
        return res.status(200).send({
            message: "Welcome to Taylor Swift Lyrics API. Developed by Meetakshi Setiya",
        });
    }
);

//all unhandled routes
app.all("*", async (req: Request, res: Response, next)=>
{
    return res.status(404).send({
        message: "Route not found."
    })
})

try {
    app.listen(port, (): void => {
        console.log(`Connected successfully on port ${port}`);
    });
} catch (error) {
    console.error("Error occured:");
}