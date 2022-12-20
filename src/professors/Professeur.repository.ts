import * as mongoose from "mongoose";
import {professeurSchema} from "./Professeur.dao";

const professeurConnector = mongoose.model("professeur", professeurSchema, "professeur");

export {professeurConnector};
