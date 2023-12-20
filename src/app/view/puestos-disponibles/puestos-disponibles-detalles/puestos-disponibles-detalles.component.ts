import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PuestosDisponiblesService } from '../service/puestos-disponibles.service';
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-puestos-disponibles-detalles',
  templateUrl: './puestos-disponibles-detalles.component.html',
  styleUrls: ['./puestos-disponibles-detalles.component.css']
})
export class PuestosDisponiblesDetallesComponent implements OnInit {

  puestosDisponibles?: any;
  nuevoPuesto: boolean = false;

  perfileForm = this.fb.group({
    
    puesto:[''],
    empresa:[''],
    disponible:[true]
  });

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder, 
    private puestosDisponiblesService: PuestosDisponiblesService,
    private location: Location
  ) {}

  ngOnInit(): void {
      
    if(this.route.snapshot.paramMap.get('id')){

      this.nuevoPuesto = false;
      let id = String(this.route.snapshot.paramMap.get('id'));
      console.log(id);

      this.puestosDisponiblesService.getPuestosDisponible(id).subscribe((resp: any)=>{
        console.log(resp.payload.data());
        this.perfileForm.setValue({...resp.payload.data()});
      });

    }else{
      this.nuevoPuesto = true;
    }
  }


  guardar(): void{
    
    if(this.nuevoPuesto){
      console.log(this.perfileForm.value);
      this.puestosDisponiblesService.addPuestosDisponible(this.perfileForm.value).then(
        () => {
          alert("Nuevo puesto creado");
          console.log("Nuevo puesto creado");
        }, (error:any) => {
          console.log(error);
        }
      );

    }else{

      let id = String(this.route.snapshot.paramMap.get('id'));
      console.warn(this.perfileForm.value);

      this.puestosDisponiblesService.updatePuestoDisponible(id, this.perfileForm.value).then(
        () => {
          alert("Puesto actualizado");
          console.log("Puesto actualizado");
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
