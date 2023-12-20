import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CandidatosService } from '../service/candidatos.service';
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-candidatos-detalles',
  templateUrl: './candidatos-detalles.component.html',
  styleUrls: ['./candidatos-detalles.component.css']
})
export class CandidatosDetallesComponent implements OnInit {

  candidato?: any;
  nuevoCandidato: boolean = false;

  perfileForm = this.fb.group({
    
    nombre:[''],
    apellidos:[''],
    dni:[''],
    direccion:[''],
    telefono:[''],
    email:[''],
    fechaNacimiento:['']
  });

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder, 
    private candidatosService: CandidatosService,
    private model: NgbModal,
    private location: Location
  ) {}

  ngOnInit(): void {
      
    if(this.route.snapshot.paramMap.get('id')){

      this.nuevoCandidato = false;
      let id = String(this.route.snapshot.paramMap.get('id'));
      console.log(id);

      this.candidatosService.getCandidato(id).subscribe((resp: any)=>{
        console.log(resp.payload.data());
        this.perfileForm.setValue({...resp.payload.data()});
      });

    }else{
      this.nuevoCandidato = true;
    }
  }


  guardar(): void{
    
    if(this.nuevoCandidato){
      console.log(this.perfileForm.value);
      this.candidatosService.addCandidato(this.perfileForm.value).then(
        () => {
          alert("Nuevo candidato creado");
          console.log("Nuevo candidato creado");
        }, (error:any) => {
          console.log(error);
        }
      );

    }else{

      let id = String(this.route.snapshot.paramMap.get('id'));
      console.warn(this.perfileForm.value);

      this.candidatosService.updateCandidato(id, this.perfileForm.value).then(
        () => {
          alert("Candidato actualizado");
          console.log("Candidato actualizado");
        }, (error:any) => {
          console.log(error);
        }
      );
    }
  }

  volver(): void {
    this.location.back();
  }
}
