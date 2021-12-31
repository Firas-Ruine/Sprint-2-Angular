import { EtudiantService } from './../services/etudiant.service';
import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../model/etudiant.model';
import { University } from '../model/university.model';
import { UniversityService } from '../services/university.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-recherche-par-university',
  templateUrl: './recherche-par-university.component.html',
  styles: [
  ]
})
export class RechercheParUniversityComponent implements OnInit {

  etudiants! : Etudiant[];
  universities!: University[];
  idUni! : number;
  universityList:any = [];

  constructor(private etudiantService: EtudiantService,private  universityService : UniversityService , public authService : AuthService ) {

   }
  ngOnInit(): void {
    this.etudiantService.listeEtudiants().subscribe(res => {
      this.etudiants = res;
    });
    this.universityService.listeUniversity().subscribe(response =>{
      console.log(response)
      this.universityList = response;
  });
}

  onChange() {
    this.etudiants = this.etudiantService.rechercherParUniversite(this.idUni)
    console.log(this.etudiants)
    }

    supprimerEtudiant(e:Etudiant){

      let conf = confirm("Etes-vous sûr ?");
        if (conf)
      this.etudiantService.supprimerEtudiant(e.idEtudiant).subscribe(()=>{
      this.SuprimerEtudiantDuTableau(e);
      });
    }
    SuprimerEtudiantDuTableau(etud : Etudiant) {
      this.etudiants.forEach((cur: { idEtudiant: number; }, index: any) => {
      if(etud.idEtudiant=== cur.idEtudiant) {
      this.etudiants.splice(index, 1);
      }
      });
      }

}
