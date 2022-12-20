import express, {Request, Response} from "express";
import "dotenv/config";
import * as mongoose from "mongoose";
import router from "./professors/Professeur.router";

const app = express();
const port = process.env.PORT;

mongoose.connect(`${process.env.mongoURI}`);
mongoose.set("strictQuery", false);

app.use(express.json());
app.use(express.urlencoded());
app.use(router);

app.listen(port, () => {
  console.log("connecté sur le port : ", port);
});
