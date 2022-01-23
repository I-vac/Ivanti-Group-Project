import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MarketPlaceComponent } from './market-place/market-place.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe } from './translate.pipe';
import { TranslationService } from './translation.service';
import { SecurityComponent } from './security/security.component';
import { PackagePageComponent } from './package-page/package-page.component';
import { LoadPageComponent } from './load-page/load-page.component';

@NgModule({
  declarations: [
    MarketPlaceComponent,
    HomePageComponent,
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    TranslatePipe,
    SecurityComponent,
    ProfilePageComponent,
    PackagePageComponent,
    HomePageComponent,
    LoadPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    RouterModule,
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatCarouselModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    NgbModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()

  ],
  providers: [TranslationService, SecurityComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
