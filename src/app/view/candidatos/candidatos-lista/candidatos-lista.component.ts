import { Component, OnInit } from '@angular/core';
import { CandidatosService } from '../service/candidatos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-candidatos-lista',
  templateUrl: './candidatos-lista.component.html',
  styleUrls: ['./candidatos-lista.component.css']
})
export class CandidatosListaComponent implements OnInit{

  candidatos?: any[];

  constructor(
    private candidatosService: CandidatosService,
    private ruta: ActivatedRoute
  ){}


  ngOnInit(): void {
      
    //metodo para mostrar todos los candidatos
    this.candidatosService.getAllCandidatos().subscribe(
      resp => {
        this.candidatos = resp;
        console.log(this.candidatos);
      }
    )
  }

  borrar(id: string): void {
    this.candidatosService.delete(id).then( ()=> {
      alert("Candidato borrado");
      console.log("Candidato borrado");
    }).catch(err => console.error(err));
  }
}
