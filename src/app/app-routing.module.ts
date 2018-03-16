import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeCardComponent } from "./timecard/timecard.component";



const routes: Routes = [
  { path: 'timecard', component: TimeCardComponent }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}