import { University } from "./university.model";

export class Etudiant {
  idEtudiant!: number;
  nom!: string;
  prenom!: string;
  dateInscri!: Date;
  section!: string;
  universite!:University;
}
