import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Colaborador } from './colaborador';
import { DataService } from './data.service';
describe('DataService', () => {
  let service: DataService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });
});
  describe('Test',() => {
    let dataService: DataService;
    let httpTestingController: HttpTestingController;
    let mockItems: Colaborador[] ;
    beforeEach(() => {
      dataService = TestBed.inject(DataService);
      httpTestingController = TestBed.inject(HttpTestingController);    
      mockItems = [ {
        numeroDeIndentificacion: 1,
        nombres: 'Erin',
        email: 'edee@example.com',
        apellidos: 'Dee',
        direccion: '',
        telefono: '',
        salario: 0,
        fk_Area: 0,
        fechaDeIngreso: new Date(),
        sexo: '',
        codigoInterno: 0
    }];
    });
    it('should return data', () => {
      let colaboradores : Colaborador[];
      dataService.ConsultarColaboradorPorIdentificacion(1).subscribe(response => {
        colaboradores = response;
      });
      const request = httpTestingController.expectOne("https://localhost:5001/api/ConsultarColaboradorPorIdentificacion/1");
      request.flush(mockItems);
      expect(colaboradores[0]).toEqual(mockItems[0]);
    });
    it("should throw error", () => {
      let error: string;
      dataService.ConsultarColaboradorPorIdentificacion(1).subscribe( e => {
        error = e;
      });
      let req = httpTestingController.expectOne("https://localhost:5001/api/ConsultarColaboradorPorIdentificacion/1");
      req.flush("Something went wrong", {
        status: 404,
        statusText: "Network error"
      });
      expect(error.indexOf("Error retrieving travellers data") >= 0).toBeTruthy();
    });
  });


// import { TestBed } from '@angular/core/testing';
// import { DataService } from './data.service';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { Observable } from 'rxjs';
// import { first } from 'rxjs/operators';

// describe('DataService', () => {
//   let service: DataService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(DataService);
//   });

//   // it('should be created', () => {
//   //   expect(service).toBeTruthy();
//   // });
// });


// describe('ColaboradoresService', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [ HttpClientTestingModule ],   
//       providers: [ DataService ]
//     });
//   });

//   describe('ConsultarColaboradorPorIdentificacion', () => {
//     let dataService: DataService;
//     let httpTestingController: HttpTestingController;
//     let mockColaborador: any;


//     beforeEach(() => {
//       dataService = TestBed.inject(DataService);
//       httpTestingController = TestBed.inject(HttpTestingController);    
//       mockColaborador = { 
//         id: 10010001,
//         name: 'Erin Dee', 
//         email: 'edee@example.com' 
//       };
//     });

//     it("should fail", (done) => {     
  
//       dataService.ConsultarColaboradorPorIdentificacion(33).subscribe((value) => {
//           console.log("value" + value); // => false
//           expect(value).toBeTruthy();
//           done();
//       });  
//     });


//     it('should GET a contact with identificación 33', () => {
//       let colaboradores = [];
//       dataService.ConsultarColaboradorPorIdentificacion(33).subscribe((colaboradoresResponse) => {   
//         console.log("colaboradoresResponse " + JSON.stringify(colaboradoresResponse));
//         colaboradores = colaboradoresResponse;
//         expect(colaboradores[0]).toEqual(mockColaborador);
//       });
//       //console.log("colaboradores " + JSON.stringify(colaboradores));
      
//       //const request = httpTestingController.expectOne('api/ConsultarColaboradorPorIdentificacion');
//       const request = httpTestingController.expectOne('https://localhost:44309/api/ConsultarColaboradorPorIdentificacion/33');            
//       //request.flush([mockColaborador]);    
//       // request.flush([request]);    
//        httpTestingController.verify();    
//     });
//   });
// });

