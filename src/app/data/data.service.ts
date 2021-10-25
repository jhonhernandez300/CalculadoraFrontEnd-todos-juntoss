import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ServicioSettings } from '../data/servicio-settings';
import { Colaborador } from '../data/colaborador';
import { IFrequency } from '../data/ifrequency';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  RegistrarColaborador(colaborador: Colaborador): Observable<any> {
    return this.http.post('https://localhost:44309/api/RegistrarColaborador', colaborador);
  }

  ConsultarColaboradorPorIdentificacion(numeroDeIdentificacion: Number): Observable<any> {
    //console.log(numeroDeIdentificacion);
    return this.http.get('https://localhost:44309/api/ConsultarColaboradorPorIdentificacion'+  "/" + numeroDeIdentificacion);
  }

  getCodigoInterno(): Observable<any> {
    return this.http.get('https://localhost:44309/api/getCodigoInterno');
  }

  obtenerAreas(): Observable<any> {
    return this.http.get('https://localhost:44309/api/obtenerAreas');
  }


  postServicioSettingsForm(servicioSettings: ServicioSettings): Observable<any> {
    return this.http.post('https://localhost:44309/api/Servicio/PostServicio', servicioSettings);
  }

  getServicioSettingsForm(servicioSettings: ServicioSettings): Observable<any> {
    //return this.http.get('https://localhost:44309/api/Servicio/GetServicio', servicioSettings);
    return this.http.get<ServicioSettings>('https://localhost:44309/api/Servicio/GetServicio' +  "/" + servicioSettings.tecnico + "/" + servicioSettings.semanaDelAno);
  }

  getFrequencies(): Promise<any> {
    return this.http.get<any>(environment.apiEndpoint + '/api/frequencies/allFrequencies').toPromise();
  }

  getSalesOrders(): Promise<any> {
    return this.http.get<any>(environment.apiEndpoint + '/api/salesorders/allSalesOrders').toPromise();
  }  

  getPercentage(): Promise<any> {
    return this.http.get<any>(environment.apiEndpoint + '/api/percentages/allPercentages').toPromise();
  }
  

}