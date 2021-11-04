import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data/data.service';

import { SeeFrequencyComponent } from './see-frequency.component';

describe('SeeFrequencyComponent', () => {
  let component: SeeFrequencyComponent;
  let fixture: ComponentFixture<SeeFrequencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeFrequencyComponent ],
      imports: [HttpClientModule],
      providers: [DataService]
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
