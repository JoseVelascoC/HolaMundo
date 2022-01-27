import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolamundoComponent } from './holamundo/holamundo.component';

const routes: Routes = [
  {
    path:"JOSE",
    component:HolamundoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
