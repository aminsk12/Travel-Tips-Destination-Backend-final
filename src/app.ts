/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
import globalErrorHandler from "./app/middlewares/globalErrorhandler";
import router from "./app/routes";
import notFound from "./app/middlewares/notFound";

const app: Application = express();

// Parsers
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: ["https://travel-tips-destination-frontend.vercel.app",
      "http://localhost:3000"
    ],


    credentials: true, // Allow credentials to be sent
  }),
);

// Application routes
app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Travel Tips & Destination Guides");
});

// Global Error
app.use(globalErrorHandler as (err: any, req: Request, res: Response, next: NextFunction) => any);

//Not Found
app.use(notFound as (req: Request, res: Response, next: NextFunction) => any);

export default app;
