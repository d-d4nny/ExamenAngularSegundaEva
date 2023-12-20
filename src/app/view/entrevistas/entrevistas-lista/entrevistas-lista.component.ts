import { Component, OnInit } from '@angular/core';
import { EntrevistasService } from '../service/entrevistas.service';
import { ActivatedRoute } from '@angular/router';
import { Candidatos } from '../../candidatos/interface/candidatos';
import { PuestosDisponibles } from '../../puestos-disponibles/interface/puestos-disponibles';

@Component({
  selector: 'app-entrevistas-lista',
  templateUrl: './entrevistas-lista.component.html',
  styleUrls: ['./entrevistas-lista.component.css']
})
export class EntrevistasListaComponent implements OnInit{

  //Variable necesaria
  entrevistas?: any[];
  idCandidato?: Candidatos;
  idPuesto?: PuestosDisponibles;
  fechaEntrevista?: String;


  constructor(

    private entrevistasService: EntrevistasService,
    private ruta: ActivatedRoute
  ) { }

  ngOnInit(): void {
    
    //metodo para mostrar todos las entrevistas
    this.entrevistasService.getAllEntrevistas().subscribe(
      resp => {
        this.entrevistas = resp;
        console.log(this.entrevistas);
      }
    )
  }

  borrar(id: string): void {
    this.entrevistasService.delete(id).then( ()=> {
      alert("Entrevista borrada");
      console.log("Entrevista borrada");
    }).catch(err => console.error(err));
  }
}
