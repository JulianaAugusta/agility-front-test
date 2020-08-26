import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientRegisterComponent } from './components/client-register/client-register.component';

const routes: Routes = [
  { path: 'home',  component: ClientListComponent },
  { path: 'register',  component: ClientRegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
