import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// const routes: Routes = [{
//   path: '', 
//   component: DemoComponent
// },
// {
//   path: '', 
//   redirectTo: '/', pathMatch: 'full'
// }];

const routes: Routes = []

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
