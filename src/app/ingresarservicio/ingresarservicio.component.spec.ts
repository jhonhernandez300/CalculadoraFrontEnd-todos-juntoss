import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IngresarservicioComponent } from './ingresarservicio.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../data/data.service';

describe('IngresarservicioComponent', () => {
  let component: IngresarservicioComponent;
  let fixture: ComponentFixture<IngresarservicioComponent>;
  let formBuilder: FormBuilder;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresarservicioComponent ],
      imports: [FormsModule, HttpClientModule, ReactiveFormsModule],
      providers:[DataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    formBuilder = TestBed.inject(FormBuilder);
    fixture = TestBed.createComponent(IngresarservicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
