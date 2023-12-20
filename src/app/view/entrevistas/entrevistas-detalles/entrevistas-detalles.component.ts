import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Candidatos } from '../../candidatos/interface/candidatos';
import { PuestosDisponibles } from '../../puestos-disponibles/interface/puestos-disponibles';
import { EntrevistasService } from '../service/entrevistas.service';
import { PuestosDisponiblesService } from '../../puestos-disponibles/service/puestos-disponibles.service';

@Component({
  selector: 'app-entrevistas-detalles',
  templateUrl: './entrevistas-detalles.component.html',
  styleUrls: ['./entrevistas-detalles.component.css']
})
export class EntrevistasDetallesComponent implements OnInit {
  //Variables necesarias

  nuevaEntrevista: boolean = false;
  entrevista: any[] = [];
  entrevistasSelect: any;
  candidatos: any[] = [];
  puestosDisponibles: any[] = [];
  puestosDisponiblesSelect: any;
  candidatosSelect: any;
  puestosDisponiblesCitado?: PuestosDisponibles;
  candidatosCitado?: Candidatos;

  //Perfil del formulario
  perfileForm = this.formulario.group({
    puestosDisponiblesSelect: [''],
    candidatosSelect: ['']
  });

  constructor(
    private route: ActivatedRoute, 
    private entrevistasService: EntrevistasService,
    private formulario: FormBuilder,
    private puestosDisponiblesService: PuestosDisponiblesService,
    private location: Location
  ) {}

  ngOnInit(): void {

    if(this.route.snapshot.paramMap.get('id')){

      this.nuevaEntrevista = false;
      let id = String(this.route.snapshot.paramMap.get('id'));
      console.log(id);

      this.entrevistasService.getEntrevista(id).subscribe((resp: any)=>{
        console.log(resp.payload.data());
        this.perfileForm.setValue({...resp.payload.data()});
      });

    }else{
      this.nuevaEntrevista = true;
    }



    //Cargamos todos los candidatos disponibles en la base de datos
    this.entrevistasService.listCandidato().subscribe((resp) => {
      this.candidatos = resp;
      console.log(this.candidatos);
    });

    this.entrevistasService.listPuestoDisponible().subscribe((resp) => {
      this.puestosDisponibles = resp;
      console.log(this.puestosDisponibles);
    })
  }

  //Metodo para guardar entrevistas
  entrevistaSave(): void {
    //Guardamos los identificadores recogidos en el formulario
    let idPuestoDisponible = this.perfileForm.value['puestosDisponiblesSelect'];
    let idCandidato = this.perfileForm.value['candidatosSelect'];


    //Si la entrevista es nueva la creamos en la base de datos con los datos recogidos en el formulario
    if(this.nuevaEntrevista){
      this.entrevistasService.addEntrevista(this.perfileForm.value).then(
        () => {
          this.puestosDisponiblesService.updateEstado(idPuestoDisponible, true).then(
          )
          alert("Nueva Entrevista Creada.");
          console.log("Nueva Entrevista Creado.");
        }, (error: any) => {
          console.log(error);
        }
      );
  
    }else{
  
      //Si no es nuevo rescatamos sus datos de la base de datos con la id de la url y modificamos sus datos
      let id = String(this.route.snapshot.paramMap.get('id'));
      console.warn(this.perfileForm.value);
  
      this.entrevistasService.updateEntrevista(id, this.perfileForm.value).then(
        () => {
          this.puestosDisponiblesService.updateEstado(idPuestoDisponible, false).then(
            )
          alert("Entrevista Modificada.");
          console.log("Entrevista Modificado.");
        }, (error: any) => {
          console.log(error);
        }
      )
    }

    this.entrevistasService.getPuestosDisponibles(idPuestoDisponible!).subscribe((resp: any) => { console.log(resp);
      console.log('Cita realizada con exito pa el puesto ' + resp.puesto + ' en la empresa ' + resp.empresa + '.');
      this.puestosDisponiblesCitado = resp;
    });

    this.entrevistasService.getCandidato(idCandidato!).subscribe((resp: any) => {
      console.log('Candidato entrevistado con dni: ' + resp.dni);
      this.candidatosCitado = resp;
    });

    alert('Entrevista realizada!!!');
  }

  //Metodo para volver a la vista anterior
volver(): void {
  this.location.back();
}
}
