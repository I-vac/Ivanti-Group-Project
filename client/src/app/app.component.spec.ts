import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import{ HttpClientTestingModule } from'@angular/common/http/testing';
import { TranslationService } from './translation.service';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from './http.service';
import { TranslatePipe } from './translate.pipe';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TranslatePipe
      ],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [ HttpService, TranslationService, TranslatePipe ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'client'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('client');
  });
});
