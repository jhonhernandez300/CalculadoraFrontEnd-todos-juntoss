import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { Colaborador } from '../data/colaborador';
import { ConsultarColaboradorComponent } from './consultar-colaborador.component';
import { DataService } from '../data/data.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ConsultarColaboradorComponent', () => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    let service: DataService;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ConsultarColaboradorComponent],
            imports: [HttpClientTestingModule, ReactiveFormsModule],
        }).compileComponents();
        service = TestBed.inject(DataService);        
        httpClient = TestBed.inject(HttpClient);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('ConsultarColaboradorComponent', () => {
        let component: ConsultarColaboradorComponent;
        let fixture: ComponentFixture<ConsultarColaboradorComponent>;        
        let mockItem: Colaborador[] = [ {
            numeroDeIndentificacion: 1,
            nombres: 'Erin Dee',
            email: 'edee@example.com',
            apellidos: '',
            direccion: '',
            telefono: '',
            salario: 0,
            fk_Area: 0,
            fechaDeIngreso: new Date(),
            sexo: '',
            codigoInterno: 0
        }];

        it('#getObservableValue should return value from observable',
        (done: DoneFn) => {
        service.ConsultarColaboradorPorIdentificacion(1).subscribe(value => {
          expect(value).toBe(mockItem);
          done();
        });
      });

    //     it('#getPromiseValue should return value from a promise',
    //     (done: DoneFn) => {
    //     service.ConsultarColaboradorPorIdentificacion(1).subscribe(value => {
    //       expect(value).toBe(mockItem);
    //       done();
    //     });
    //   });

      // Inject the http service and test controller for each test

        // beforeEach(() => {
        //     fixture = TestBed.createComponent(ConsultarColaboradorComponent);
        //     component = fixture.debugElement.componentInstance;
        //     fixture.detectChanges();
        // });
        // it('should create', () => {
        //     expect(component).toBeTruthy();
        // });
        // it('should show quote after getQuote (waitForAsync)', fakeAsync(() => {
        //     fixture.detectChanges();  // ngOnInit()
        //     //expect(component.items).toBe(mockItem)
        //     component.ngOnInit();
        //     fixture.whenStable().then(() => {  // wait for async getQuote
        //         fixture.detectChanges();
        //         tick();
        //         console.log(JSON.stringify(component.items));    // update view with quote
        //         expect(component.items).toBe(mockItem);
        //     });
        // }));

        // it('should return response', fakeAsync(()=>{
        //     const fixture = TestBed.createComponent(ConsultarColaboradorComponent);
        //     //console.log("fixture " + fixture);
        //     const component = fixture.debugElement.componentInstance;
        //     console.log("component " + JSON.stringify(component));
        //     component.consultarColaborador(1);
        //     tick(1000);            
        //     fixture.detectChanges();
        //     //console.log("component.items " + component.items);
        //     expect(component.items).toBe(mockItem);
        //   }));

       

        // it('returns the count', () => {
        //     let actualCount: number | undefined;
        //     consultarColaborador.subscribe((count) => {
        //       actualCount = count;
        //     });
        //     expect(actualCount).toBe(0);
        //   });

    });
});

// import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
// import { ConsultarColaboradorComponent } from './consultar-colaborador.component';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { DataService } from '../data/data.service';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { By } from '@angular/platform-browser';

// describe('ConsultarColaboradorComponent', () => {
//     let httpClient: HttpClient;
//   let httpTestingController: HttpTestingController;
//   let component: ConsultarColaboradorComponent;
//   let fixture: ComponentFixture<ConsultarColaboradorComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ ConsultarColaboradorComponent ],
//       imports: [ HttpClientTestingModule, ReactiveFormsModule ]
//     })
//     .compileComponents();
//      // Inject the http service and test controller for each test
//      httpClient = TestBed.inject(HttpClient);
//      httpTestingController = TestBed.inject(HttpTestingController);
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ConsultarColaboradorComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

// it('numeroDeIdentificacion should be greater than 0', () => {
//   fakeAsync(() => {
//     const numeroDeIdentificacionElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#myForm')
//                                                   .querySelector('input');
//       numeroDeIdentificacionElement.value = "0";
//       numeroDeIdentificacionElement.dispatchEvent(new Event('input'));
//       //const isLogginFormValid = component.myForm.valid;
//     fixture.detectChanges();
//     //await fixture.whenStable().then(()=> {
//     fixture.whenStable().then(()=> {
//       const numeroDeIdentificacionValue = component.myForm.get('numeroDeIdentificacion');
//       expect(numeroDeIdentificacionElement.value).toBeLessThan(numeroDeIdentificacionValue.value);
//       //expect(isLogginFormValid).toBeTruthy();
//     });
//     })
//   // expect(component).toBeTruthy();
// });

//   it('numeroDeIdentificacion should be less than 30', async () => {
//     const numeroDeIdentificacionElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#myForm')
//                                                   .querySelector('input');
//       numeroDeIdentificacionElement.value = "30";
//       numeroDeIdentificacionElement.dispatchEvent(new Event('input'));
//       //const isLogginFormValid = component.myForm.valid;
//     fixture.detectChanges();
//     await fixture.whenStable().then(()=> {
//       const numeroDeIdentificacionValue = component.myForm.get('numeroDeIdentificacion');
//       expect(numeroDeIdentificacionElement.value).toBeGreaterThan(numeroDeIdentificacionValue.value);
//       //expect(isLogginFormValid).toBeTruthy();
//     })
//   expect(component).toBeTruthy();
// });

// it('numeroDeIdentificacion should be greater than 0', async () => {
//   let  numeroDeIdentificacionElement = fixture.debugElement.query(By.css('input')).nativeElement;
//   fixture.detectChanges();
//   await fixture.whenStable();
//   expect(numeroDeIdentificacionElement.value()).toBeGreaterThan(0);
// });

// it('numeroDeIdentificacion should be greater than 0', async () => {
//   let  numeroDeIdentificacionElement = component.myForm.get('numeroDeIndentificacion');
//   numeroDeIdentificacionElement.setValue(1);
//   fixture.detectChanges();
//   expect(numeroDeIdentificacionElement.valid).toBeTruthy();
// });

// it('numeroDeIdentificacion should not be empty', async () => {
//   let  numeroDeIdentificacionElement = component.myForm.get('numeroDeIndentificacion');
//   numeroDeIdentificacionElement.setValue("");
//   fixture.detectChanges();
//   expect(numeroDeIdentificacionElement.hasError('minLength')).toBeFalsy();
// });

// });
