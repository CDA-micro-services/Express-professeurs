import * as mongoose from "mongoose";

type ProfesseurType = {
  nom: String;
  prenom: String;
  classesList: String[];
  matiere: String;
};

const professeurSchema = new mongoose.Schema({
  nom: String,
  prenom: String,
  classesList: [String],
  matiere: String,
});

export {ProfesseurType, professeurSchema};
