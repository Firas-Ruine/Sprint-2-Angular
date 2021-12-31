import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';
import { AddUniversityComponent } from './add-university/add-university.component';
import { UpdateUniversityComponent } from './update-university/update-university.component';
import { UniversityComponent } from './university/university.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { NgSelectModule } from '@ng-select/ng-select';
import { RechercheParUniversityComponent } from './recherche-par-university/recherche-par-university.component';
@NgModule({
  declarations: [
    AppComponent,
    EtudiantsComponent,
    AddEtudiantComponent,
    UpdateEtudiantComponent,
    LoginComponent,
    ForbiddenComponent,
    AddUniversityComponent,
    UpdateUniversityComponent,
    UniversityComponent,
    RechercheParUniversityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgSelectModule,
    RouterModule,
    HttpClientModule,
   ReactiveFormsModule,
   Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
