import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultarColaboradorComponent } from './consultar-colaborador.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from '../data/data.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

describe('ConsultarColaboradorComponent', () => {
    let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let component: ConsultarColaboradorComponent;
  let fixture: ComponentFixture<ConsultarColaboradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarColaboradorComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
     // Inject the http service and test controller for each test
     httpClient = TestBed.inject(HttpClient);
     httpTestingController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should check numeroDeIdentificacion', () => {
      const numeroDeIdentificacionElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#myForm')
                                                    .querySelector('input');                                                    
        numeroDeIdentificacionElement.value = "0";
        numeroDeIdentificacionElement.dispatchEvent(new Event('input'));
        const isLogginFormValid = component.myForm.valid;
      fixture.detectChanges();
      fixture.whenStable().then(()=> {
        //   const numeroDeIdentificacionValue = component.myForm.get('numeroDeIdentificacion');
        //   expect(numeroDeIdentificacionElement.value).toBeGreaterThan(numeroDeIdentificacionValue.value);          
        expect(isLogginFormValid).toBeTruthy();
      })  
    // expect(component).toBeTruthy();
  });
});

