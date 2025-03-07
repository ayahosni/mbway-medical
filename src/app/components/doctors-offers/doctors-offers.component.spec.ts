import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsOffersComponent } from './doctors-offers.component';

describe('DoctorsOffersComponent', () => {
  let component: DoctorsOffersComponent;
  let fixture: ComponentFixture<DoctorsOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorsOffersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorsOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
