import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeePercentageComponent } from './see-percentage.component';

describe('SeePercentageComponent', () => {
  let component: SeePercentageComponent;
  let fixture: ComponentFixture<SeePercentageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeePercentageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeePercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
