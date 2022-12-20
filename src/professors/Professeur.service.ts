import {professeurConnector} from "./Professeur.repository";
import {ProfesseurType} from "./Professeur.dao";

export default class ProfesseurService {
  // on typeof pour recup toutes les methodes
  // mais on peut recup un null dans certaines methodes et donc on doit faire un .cathc
  private repo: typeof professeurConnector;

  constructor(repository: typeof professeurConnector) {
    this.repo = repository;
  }

  // await après le return n'est pas nécessaire
  public async getAll(): Promise<ProfesseurType[]> {
    return this.repo.find();
  }

  public async saveProfesseur(professeur: ProfesseurType): Promise<ProfesseurType> {
    return this.repo.create(professeur).catch((err) => err);
  }

  public async getById(id: String): Promise<ProfesseurType> {
    return this.repo.findById(id).catch((err) => err);
  }

  public async getByClasse(matiere: String): Promise<ProfesseurType> {
    return this.repo.find({matiere: matiere}).catch((err) => err);
  }

  public async update(id: String, professeur: ProfesseurType): Promise<ProfesseurType> {
    return this.repo.findByIdAndUpdate(id, professeur).catch((err) => {
      console.log(err);
      return err;
    });
  }

  public async deleteProfesseur(id: String) {
    return this.repo.findByIdAndDelete(id);
  }
}
