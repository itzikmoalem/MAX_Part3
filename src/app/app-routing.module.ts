import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { homeComponent } from './Components/home/home.component';

const routes: Routes = [  { path: '', component: homeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
