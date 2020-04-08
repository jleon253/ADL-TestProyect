import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from './components/pages/productos/productos.component';


const routes: Routes = [
  { path: 'productos', component: ProductosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'productos' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
