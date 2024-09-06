import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';
import { HelpCompComponent } from './help-comp/help-comp.component';


const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"data", component:DataComponent},
  {path:"help-comp", component:HelpCompComponent},
  {path:"**", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
