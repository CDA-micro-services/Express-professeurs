import {Request, Response} from "express";
import {REPLCommand} from "repl";
import ProfesseurService from "./Professeur.service";

class ProfesseurController {
  private service: ProfesseurService;

  constructor(service: ProfesseurService) {
    this.service = service;
  }

  public getAll = async (req: Request, res: Response) => {
    const data = await this.service.getAll().then((data: any) => data);
    res.send(data);
  };

  public post = async (req: Request, res: Response) => {
    const professeur = req.body;
    console.log(professeur);
    const data = await this.service.saveProfesseur(professeur).then((data: any) => data);
    res.send(data);
  };

  public delete = async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = await this.service.deleteProfesseur(id).then((data: any) => data);
    res.send(data);
  };

  public getById = async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = await this.service.getById(id).then((data: any) => data);
    res.send(data);
  };

  public getByMatiere = async (req: Request, res: Response) => {
    const matiere = req.params.matiere;
    const data = await this.service.getByClasse(matiere).then((data) => data);
    res.send(data);
  };

  public update = async (req: Request, res: Response) => {
    const data = await this.service.update(req.params.id, req.body).then((data) => {
      console.log(data);
      return data;
    });
    res.send(data);
  };
}

export default ProfesseurController;
