import "reflect-metadata"
import express from "express"
import "./database";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(router);

app.listen(process.env.PORT || 3000, () => console.log("Server is running"))