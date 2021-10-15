import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeFrequencyComponent } from './see-frequency.component';

describe('SeeFrequencyComponent', () => {
  let component: SeeFrequencyComponent;
  let fixture: ComponentFixture<SeeFrequencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeFrequencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeFrequencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
