import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-presupuesto',
  templateUrl: './ingresar-presupuesto.component.html',
  styleUrls: ['./ingresar-presupuesto.component.css']
})
export class IngresarPresupuestoComponent implements OnInit{
  cantidad: number; //propiedad
  cantidadIncorrecta: boolean;

  constructor(private _presupuestoService: PresupuestoService, private router: Router) { // inicializamos el servicio con "private", siempre con un guion bajo
    this.cantidad = 0; // inicializamos la propiedad con estas caracteristicas
    this.cantidadIncorrecta = false;
  } 

  ngOnInit(): void {
  }

  agregar() {
    if (this.cantidad > 0){
      this.cantidadIncorrecta = false;
      this._presupuestoService.presupuesto = this.cantidad; //estamos accediendo a la variable presupuesto desde este componente y añadiendole la info que use la variable cantidad
      this._presupuestoService.restante = this.cantidad; // el restante por ahora va a seguir siengo igual a la canntidad ya que ltodavia no hay ningun gasto 
      this.router.navigate(['/gastos']) // esto es para que se redireccione en la ruta que dejamos en routing.module
    } else {
      this.cantidadIncorrecta = true;
    }
  }

}
