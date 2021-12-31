import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from '../model/etudiant.model';
import { University } from '../model/university.model';
import { EtudiantService } from '../services/etudiant.service';
import { UniversityService } from '../services/university.service';

@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styleUrls: ['./update-etudiant.component.css'],
})
export class UpdateEtudiantComponent implements OnInit {
  currentEtudiant = new Etudiant();
  universityList: University[]=[];
  updatedUniversity!: University;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private etudiantService: EtudiantService,
    public universityService: UniversityService
  ) {

  }

  ngOnInit(): void {
    this.etudiantService.consulterEtudiant(this.activatedRoute.snapshot.params['id'])
      .subscribe(
        (etud) => {
          console.log(etud);
          this.currentEtudiant = etud;
          this.updatedUniversity = etud.universite;
        },
        (error) => {
          console.log(error);
        }
      );

    this.onSelectUni(this.currentEtudiant.idEtudiant);
  }
  updateEtudiant() {
    console.log(this.currentEtudiant);
  this.updatedUniversity = this.etudiantService.consulterUniversite(
      this.currentEtudiant.universite.idUni
    );
    this.currentEtudiant.universite = this.updatedUniversity;
    this.etudiantService.updateEtudiant(this.currentEtudiant).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['etudiants']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onChange(event: any) {
   /*this.currentEtudiant.universite = event.value ;
     this.etudiantService.updateEtudiant(this.currentEtudiant);*/

    console.log(event.target.value);
  }

  onSelectUni(id: number) {
    this.universityService.listeUniversity().subscribe((response) => {
      console.log(response);
      this.universityList = response;
    });
  }
}
