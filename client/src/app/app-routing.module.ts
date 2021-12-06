import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarketPlaceComponent } from './market-place/market-place.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UploadDownloadComponent } from './upload-download/upload-download.component';


const routes: Routes = [
  { path: 'market', component: MarketPlaceComponent },
  { path: '', component: HomePageComponent},           // Add this
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: "file", component: UploadDownloadComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
