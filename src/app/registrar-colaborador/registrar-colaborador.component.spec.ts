import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarColaboradorComponent } from './registrar-colaborador.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../data/data.service';

describe('RegistrarColaboradorComponent', () => {
  let component: RegistrarColaboradorComponent;
  let fixture: ComponentFixture<RegistrarColaboradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarColaboradorComponent ],
      imports:[FormsModule, HttpClientModule, ReactiveFormsModule],
      providers:[DataService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
