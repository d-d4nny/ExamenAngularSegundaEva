import { Component, OnInit } from '@angular/core';
import { PuestosDisponiblesService } from '../service/puestos-disponibles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-puestos-disponibles-lista',
  templateUrl: './puestos-disponibles-lista.component.html',
  styleUrls: ['./puestos-disponibles-lista.component.css']
})
export class PuestosDisponiblesListaComponent implements OnInit{

  //Variable necesaria
  puestosDisponibles?: any[];

  constructor(

    private puestosDisponiblesService: PuestosDisponiblesService,
    private ruta: ActivatedRoute
  ) { }

  ngOnInit(): void {
    
    //metodo para mostrar todos las puestos
    this.puestosDisponiblesService.getAllPuestosDisponibles().subscribe(
      resp => {
        this.puestosDisponibles = resp;
        console.log(this.puestosDisponibles);
      }
    )
  }

  borrar(id: string): void {
    this.puestosDisponiblesService.delete(id).then( ()=> {
      alert("Puesto borrado");
      console.log("Puesto borrado");
    }).catch(err => console.error(err));
  }
}
