import { ComponentFixture, TestBed } from '@angular/core/testing';
import{ HttpClientTestingModule } from'@angular/common/http/testing';

import { ProfilePageComponent } from './profile-page.component';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProfilePageComponent', () => {
  let component: ProfilePageComponent;
  let fixture: ComponentFixture<ProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilePageComponent ],
      providers: [HttpService],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const user = { "first_name": "asdasd", "last_name": "asdasd", "email": "q@q.q", "password": "$2a$10$RdNJDoFYB97I1aAGWFhYmOEtlFyL0B9IRvO4zDEwKC/lZujDnBWoG", "createdAt": null, "enabled": true, "roles": [ { "id": "619908d5f0ee5e076e770b56", "role": "ADMIN" } ] };
    component.currentUser = user;
  });

  afterEach(() => {
    TestBed.resetTestingModule();
});
});
