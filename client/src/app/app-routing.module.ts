import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarketPlaceComponent } from './market-place/market-place.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './public/login/login.component';
import { RegisterComponent } from './public/register/register.component';


const routes: Routes = [
  { path: 'market', component: MarketPlaceComponent },
  { path: '', component: HomePageComponent},           // Add this
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
