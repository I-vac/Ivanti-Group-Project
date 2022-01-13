import { ComponentFixture, TestBed } from '@angular/core/testing';
import{ HttpClientTestingModule } from'@angular/common/http/testing';

import { RegisterComponentComponent } from './register-component.component';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('RegisterComponentComponent', () => {
  let component: RegisterComponentComponent;
  let fixture: ComponentFixture<RegisterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponentComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [RouterTestingModule, HttpService]
      
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
