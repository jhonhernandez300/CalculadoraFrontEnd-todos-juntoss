import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataService } from '../data/data.service';

import { SeeOrdersSalesComponent } from './see-orders-sales.component';

describe('SeeOrdersSalesComponent', () => {
  let component: SeeOrdersSalesComponent;
  let fixture: ComponentFixture<SeeOrdersSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeOrdersSalesComponent ],
      imports: [HttpClientModule],
      providers: [DataService],
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
