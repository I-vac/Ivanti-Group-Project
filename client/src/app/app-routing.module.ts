import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarketPlaceComponent } from './market-place/market-place.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UploadDownloadComponent } from './upload-download/upload-download.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { PackagePageComponent } from './package-page/package-page.component';
import { LoadPageComponent } from './load-page/load-page.component';
import { SecurityComponent } from './security/security.component';


const routes: Routes = [
  { path: 'market', component: MarketPlaceComponent },
  { path: 'home', component: HomePageComponent},           // Add this
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'loading', component: LoadPageComponent},
  { path: 'file', component: UploadDownloadComponent},
  { path: 'profile', component: ProfilePageComponent},
  { path: 'createPackage', component: RegisterComponentComponent},
  { path: 'packagepage', component: PackagePageComponent},
  { path: 'packagepage/:id', component: PackagePageComponent},
  { path: 'sec', component: SecurityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
