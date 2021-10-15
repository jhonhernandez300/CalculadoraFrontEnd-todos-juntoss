import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeOrdersSalesComponent } from './see-orders-sales.component';

describe('SeeOrdersSalesComponent', () => {
  let component: SeeOrdersSalesComponent;
  let fixture: ComponentFixture<SeeOrdersSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeOrdersSalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeOrdersSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
