import {NgModule} from "@angular/core"
import {Routes, RouterModule} from "@angular/router"

// Componentes
import { GastosComponent } from "./components/gastos/gastos.component";
import { IngresarPresupuestoComponent } from "./components/ingresar-presupuesto/ingresar-presupuesto.component";

const routes: Routes = [
{path: "ingresarPresupuesto", component: IngresarPresupuestoComponent}, // aca genero la ruta hacia el componente
{path: "gastos", component: GastosComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}