import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


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


describe('ColaboradoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],   
      providers: [ DataService ]
    });
  });

  describe('ConsultarColaboradorPorIdentificacion', () => {
    let dataService: DataService;
    let httpTestingController: HttpTestingController;
    let mockColaborador: any;


    beforeEach(() => {
      dataService = TestBed.inject(DataService);
      httpTestingController = TestBed.inject(HttpTestingController);    
      mockColaborador = { 
        id: 100,
        name: 'Erin Dee', 
        email: 'edee@example.com' 
      };
    });

    it('should GET a contact with identificación 33', () => {
      dataService.ConsultarColaboradorPorIdentificacion(33).subscribe((colaboradores) => {            
        expect(colaboradores[0]).toEqual(mockColaborador);
      });

      //const request = httpTestingController.expectOne('api/ConsultarColaboradorPorIdentificacion');
      const request = httpTestingController.expectOne('https://localhost:44309/api/ConsultarColaboradorPorIdentificacion/33');      
      request.flush([mockColaborador]);    
      httpTestingController.verify();    
    });
  });
});
