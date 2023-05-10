import {NgModule} from "@angular/core"
import {Routes, RouterModule} from "@angular/router"

// Componentes
import { GastosComponent } from "./components/gastos/gastos.component";
import { IngresarPresupuestoComponent } from "./components/ingresar-presupuesto/ingresar-presupuesto.component";

const routes: Routes = [ // rutas
{path: "", redirectTo:"/ingresarPresupuesto", pathMatch:"full" }, // ponemos esto para cuando este la barra sola, que vaya directo a este componente
{path: "ingresarPresupuesto", component: IngresarPresupuestoComponent}, // aca genero la ruta hacia el componente
{path: "gastos", component: GastosComponent},
{path: "**", redirectTo:"/ingresarPresupuesto", pathMatch:"full"} // cuando pongo cualquier direccion me redirecciona a este componente
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}