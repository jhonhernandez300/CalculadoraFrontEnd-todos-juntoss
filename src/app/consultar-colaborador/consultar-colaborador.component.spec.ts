import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarColaboradorComponent } from './consultar-colaborador.component';

describe('ConsultarColaboradorComponent', () => {
  let component: ConsultarColaboradorComponent;
  let fixture: ComponentFixture<ConsultarColaboradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarColaboradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
