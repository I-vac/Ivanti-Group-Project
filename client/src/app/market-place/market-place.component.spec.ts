import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarketPlaceComponent } from './market-place.component';
import{ HttpClientTestingModule } from'@angular/common/http/testing';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('MarketPlaceComponent', () => {
  let component: MarketPlaceComponent;
  let fixture: ComponentFixture<MarketPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketPlaceComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([]) ],
      providers: [RouterTestingModule, RouterModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
