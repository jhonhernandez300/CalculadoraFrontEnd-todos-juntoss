import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { Colaborador } from './colaborador';

import { DataService } from './data.service';

describe('DataService test', () => {
  let service: DataService;
  let httpTestingController: HttpTestingController;
  let mockItems: Colaborador[] ;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, HttpClientModule],
      providers:[DataService]
    }).compileComponents();
    service = TestBed.inject(DataService);
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
  it('should be created', () => {
    expect(service).toBeTruthy();
    console.log(JSON.stringify(service)); 
    //LOG: '{"params":{"_isScalar":true,"scheduler":null}}'
});
  it('should return data', () => {
    let colaboradores : Colaborador[];
    service.consultarColaboradorPorIdentificacion(1).subscribe(response => {
      colaboradores = response;
      expect(colaboradores[0]).toEqual(mockItems[0]);
    });
    const request = httpTestingController.expectOne("https://localhost:44309/api/ConsultarColaboradorPorIdentificacion/1");
    request.flush(mockItems);
    httpTestingController.verify();
  });

  it("should throw error", () => {
    service.consultarColaboradorPorIdentificacion(1).subscribe( 
      result => console.log(result),
      e => {
      expect(e.status == 404 ).toBeTruthy();
    });
   
    let req = httpTestingController.expectOne("https://localhost:44309/api/ConsultarColaboradorPorIdentificacion/1");
    req.flush("Something went wrong", {
      status: 404,
      statusText: "Network error"
    });
    httpTestingController.verify();
    
  });
  

});
 
  

