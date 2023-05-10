import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingresar-presupuesto',
  templateUrl: './ingresar-presupuesto.component.html',
  styleUrls: ['./ingresar-presupuesto.component.css']
})
export class IngresarPresupuestoComponent implements OnInit{
  cantidad: number; //propiedad
  cantidadIncorrecta: false;

  constructor() {
    this.cantidad = 0; // inicializamos la propiedad con estas caracteristicas
    this.cantidadIncorrecta= false;
  }

  ngOnInit(): void {
    
  }

}
