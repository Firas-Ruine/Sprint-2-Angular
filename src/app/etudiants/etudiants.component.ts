
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{Etudiant} from '../model/etudiant.model';
import { AuthService } from '../services/auth.service';
import { EtudiantService } from '../services/etudiant.service';
@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})

export class EtudiantsComponent implements OnInit {
   etudiants : any = [];
   searchText : any;
  constructor(private etudiantService: EtudiantService,private router:Router,public authService: AuthService) {

  }

    ngOnInit(): void {
      this.etudiantService.listeEtudiants().subscribe((etud) => {
      console.log(etud);
      this.etudiants = etud;
      })
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
