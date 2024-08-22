import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BurgerComponent } from './burger/burger.component';
import { ClientComponent } from './client/client.component';
import { CommandeComponent } from './commande/commande.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path : '' ,redirectTo: 'home' ,pathMatch: 'full'
  },
  {
    path : 'home' ,component:HomeComponent
  },
  {
    path : 'burger' ,component:BurgerComponent
  },
  {
    path : 'client' ,component:ClientComponent
  },
  {
    path : 'commande' ,component:CommandeComponent
  },
  {
    path : 'user' ,component:UserComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
