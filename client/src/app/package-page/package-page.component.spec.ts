import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagePageComponent } from './package-page.component';

describe('PackagePageComponent', () => {
  let component: PackagePageComponent;
  let fixture: ComponentFixture<PackagePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackagePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
