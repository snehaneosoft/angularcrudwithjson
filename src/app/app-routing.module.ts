import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { EditstudentComponent } from './editstudent/editstudent.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path:'/',component:AppComponent},
  { path: 'add', component: AddstudentComponent }, 
  {path:'edit/:id',component:EditstudentComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
