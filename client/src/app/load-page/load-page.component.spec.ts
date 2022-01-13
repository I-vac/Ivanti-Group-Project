import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslationService } from '../translation.service';

import { LoadPageComponent } from './load-page.component';

describe('LoadPageComponent', () => {
  let component: LoadPageComponent;
  let fixture: ComponentFixture<LoadPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadPageComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule],
      providers: [TranslationService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
